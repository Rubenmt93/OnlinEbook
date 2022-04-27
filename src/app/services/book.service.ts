import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { map } from 'rxjs/operators';
import { Relation } from '../interfaces/relation';
firebase.initializeApp(environment.firebaseConfig)

 
@Injectable({
  providedIn: 'root'
})
export class BookService {
 items: Observable<any[]>;
 book!:Book
  

  constructor( private firestore: AngularFirestore) {
    this.items= firestore.collection('book').valueChanges({ idField: 'eventId' });
    
  }
  motodo(){
   return this.items
  }

  searh(){
    return this.firestore.collectionGroup('book', ref =>ref.where('name','==','Harry Potter y la camara secreta')).valueChanges()
    
  }

  createPolicy(){
    var book = {
      active: true,      
      author: 'J.K. Rowling',
      categories: ['fantasia'],
      img:'https://imagessl5.casadellibro.com/a/l/t7/05/9788498381405.jpg',
      isbn:'9788498387650',
      link: "http://www.africau.edu/images/default/sample.pdf",
      name: "Harry Potter y las reliquias de la muerte",
      price: 0,
      userOwner: null,
      year:   2006
    }
    return this.firestore.collection('book').add(book);
  }
  getBookById(id:string){
    
    return this.firestore.collection('book').doc(id).valueChanges({idField: 'eventId'})
  }
  bougth(userId:string,bookId:string){
    return this.firestore.collection('acquired').add({user:userId,book:bookId});

  }

  getAcquiredBook(UserId:string,BookId:string){
    
    return this.firestore.collectionGroup('acquired' ,ref =>  ref.where("user", ">=", UserId).where("book","==",BookId)).valueChanges()
  }

  addFavoriteBook(userId:string,bookId:string){
    return this.firestore.collection('favorites').add({user:userId,book:bookId});

  }
  getFavoriteBook(UserId:string,BookId:string){
    return this.firestore.collectionGroup('favorites' ,ref =>  ref.where("user", ">=", UserId).where("book","==",BookId)).valueChanges({idField: 'eventId'} )

  }
  removeFavoriteBook(FavId:string){
   return this.firestore.collection("favorites").doc(FavId).delete()
  }

  getMyBooks(UserId:string){
    var booksArray:Book[]=[]
     this.firestore.collectionGroup('acquired' ,ref =>  ref.where("user", "==", UserId)).valueChanges({idField: 'eventId'}).subscribe(result =>{
      result.forEach(book  => {
        var aux = book as Relation
       
        this.getBookById(aux.book!).subscribe(book =>{
          
          booksArray.push(book as Book)
          
        })

      })
      
    })
   return booksArray
  }
}

