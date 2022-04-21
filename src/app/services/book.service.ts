import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
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
    return this.firestore.collectionGroup('book', ref =>ref.where('name','>=','')).valueChanges()
    
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
    
    return this.firestore.collection('book').doc(id).valueChanges()
  }
  bougth(userId:string,bookId:string){
    return this.firestore.collection('acquired').add({user:userId,book:bookId});

  }
}

