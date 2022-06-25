import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Charge } from '../interfaces/charge';
firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  constructor( private firestore: AngularFirestore) { }
  recordCharge(user:string, bookId:string, userOwner:string, price:number, date:string,  bookName:string){
    
    this.firestore.collection('sold').doc(bookId).set({
      sold: true
    });
     return this.firestore.collection('charges').add({
      buyer: user,
      book: bookId,
      userOwner: userOwner,
      amount: price,
      date: date,
      bookName: bookName,
      activo: true
    });
  }

  getChargesbybook( bookId:string){
    return this.firestore.collectionGroup('charges' ,ref =>  ref.where("book", "==", bookId).where('activo','==',true)).valueChanges({idField: 'eventId'} )
  }
  getSoldBook(){
    return this.firestore.collectionGroup('sold' ,ref =>  ref.where("sold", "==", true)).valueChanges({idField: 'eventId'} )

  }
  payAuthor(book:string){     
      
      this.firestore.collectionGroup('charges' ,ref =>  ref.where("book", "==", book)).valueChanges({idField: 'eventId'})
       .subscribe(result =>{
         result.forEach(charge =>{this.updateCharge(charge as Charge)})
          
       })
  }

  updateCharge(charge:Charge){
    
    this.firestore.collection('charges').doc(charge.eventId).set({
      activo:false,
      amount: charge.amount,
      book:charge.book,
      bookName:charge.bookName,
      buyer:charge.buyer,
      date:charge.date,
      userOwner:charge.userOwner,
    });
  }
}
