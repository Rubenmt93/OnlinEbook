import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import 'firebase/compat/storage';
import { Relation } from '../interfaces/relation';
import algoliasearch from 'algoliasearch/lite';

firebase.initializeApp(environment.firebaseConfig) 
@Injectable({
  providedIn: 'root'
})

export class BookService {
 items: Observable<any[]>;
 book!:Book
 storageRef=firebase.app().storage().ref()
 searchClient = algoliasearch(
  'YOXBFV7TK8',
   '9a76d971acc4ab2225df7b67d5c598e9',   
);
//  client = algoliasearch(this.APPLICATION_ID, this.SEARCH_API_KEY)
//  index = client.initIndex(this.ALGOLIA_INDEX)

  constructor( private firestore: AngularFirestore) {
    this.items= firestore.collection('book').valueChanges({ idField: 'eventId' });
    
  }
  
  activateBook(id:string){
    return this.firestore.collection('book').doc(id).update({active:true});
  }
  desactivateBook(id:string){
    return this.firestore.collection('book').doc(id).update({active:false});
  }
  ////////////////////////////////////////////////////////
  createBook(author:string, categories:string[],isbn:string, name:string,year:number,price:number,userOwner:string,img64:string,pdf:string,abstract:string){
    return this.SubirPortada(name,img64).then(imagen =>{
     
      this.SubirPdf(name,pdf).then(pdf => {
        var book = {
          active: false,      
          author: author,
          categories: categories,
          img:imagen,
          isbn:isbn,
          link: pdf,
          name: name,
          price: price,
          userOwner: userOwner,
          year:   year,
          abstract: abstract
        }
        return this.firestore.collection('book').add(book);
        
      })
    })
   
  }
  async SubirPortada( bookname:string, img64:any){      
    try{
      let respuesta = await this.storageRef.child("portadas/"+bookname).putString(img64,'data_url')
      return await respuesta.ref.getDownloadURL()
    }catch (error){
      window.alert(error)
      return null
    }
  }
  async SubirPdf( bookname:string, pdf:any){      
    try{
      let respuesta = await this.storageRef.child("pdf/"+bookname).putString(pdf,'data_url')
      return await respuesta.ref.getDownloadURL()
    }catch (error){
      window.alert(error)
      return null
    }
  }
  ////////////////////////////////////////////////////////
  getBookById(id:string){
    
    return this.firestore.collection('book').doc(id).valueChanges({idField: 'eventId'})
  }
  ////////////////////CRUD Acquired///////////////////////
  addAcquiredBook(userId:string,bookId:string){
    return this.firestore.collection('acquired').add({user:userId,book:bookId});

  }

  getAcquiredBook(UserId:string,BookId:string){
    
    return this.firestore.collectionGroup('acquired' ,ref =>  ref.where("user", ">=", UserId).where("book","==",BookId)).valueChanges()
  }
  /////////////////// CRUD Favorites//////////////////////
  addFavoriteBook(userId:string,bookId:string){
    return this.firestore.collection('favorites').add({user:userId,book:bookId});

  }
  getFavoriteBook(UserId:string,BookId:string){
    return this.firestore.collectionGroup('favorites' ,ref =>  ref.where("user", ">=", UserId).where("book","==",BookId)).valueChanges({idField: 'eventId'} )

  }
  removeFavoriteBook(FavId:string){
    return this.firestore.collection("favorites").doc(FavId).delete()
   }
  ///////////////////CRUD Slopes////////////////////////
  addSlopesBook(userId:string,bookId:string){
    return this.firestore.collection('slopes').add({user:userId,book:bookId});

  }
  getSlopesBook(UserId:string,BookId:string){
    return this.firestore.collectionGroup('slopes' ,ref =>  ref.where("user", ">=", UserId).where("book","==",BookId)).valueChanges({idField: 'eventId'} )

  }
  removeSlopeBook(FavId:string){
    return this.firestore.collection("slopes").doc(FavId).delete()
   }
    ////////////////WANTED////////////////////////////
  addWantedBook(userId:string,bookId:string){
    return this.firestore.collection('wanted').add({user:userId,book:bookId});

  }
  getWantedBook(UserId:string,BookId:string){
    return this.firestore.collectionGroup('wanted' ,ref =>  ref.where("user", ">=", UserId).where("book","==",BookId)).valueChanges({idField: 'eventId'} )

  }
  removeWantedBook(wantedId:string){
    return this.firestore.collection("wanted").doc(wantedId).delete()
   }
  ///////////////////Mis listas/////////////////////////
 
  
  getMyBooks(UserId:string){
    var booksArray:Book[]=[]
     this.firestore.collectionGroup('acquired' ,ref =>  ref.where("user", "==", UserId)).valueChanges({idField: 'eventId'}).subscribe(result =>{
      //booksArray:Book[]=[]
      result.forEach(book  => {
        var aux = book as Relation       
        this.getBookById(aux.book!).subscribe(book =>{          
          booksArray.push(book as Book)          
        })
      })      
    })
   return booksArray
  }
  getMyFavorites(UserId:string){
    var booksArray:Book[]=[]
     this.firestore.collectionGroup('favorites' ,ref =>  ref.where("user", "==", UserId)).valueChanges({idField: 'eventId'}).subscribe(result =>{
      result.forEach(book  => {
        var aux = book as Relation       
        this.getBookById(aux.book!).subscribe(book =>{          
          booksArray.push(book as Book)          
        })
      })      
    })
   return booksArray
  }
  getMySlopes(UserId:string){
    var booksArray:Book[]=[]
     this.firestore.collectionGroup('slopes' ,ref =>  ref.where("user", "==", UserId)).valueChanges({idField: 'eventId'}).subscribe(result =>{
      result.forEach(book  => {
        var aux = book as Relation       
        this.getBookById(aux.book!).subscribe(book =>{          
          booksArray.push(book as Book)          
        })
      })      
    })
   return booksArray
  }
  getMyWanted(UserId:string){
    var booksArray:Book[]=[]
     this.firestore.collectionGroup('wanted' ,ref =>  ref.where("user", "==", UserId)).valueChanges({idField: 'eventId'}).subscribe(result =>{
      result.forEach(book  => {
        var aux = book as Relation       
        this.getBookById(aux.book!).subscribe(book =>{          
          booksArray.push(book as Book)          
        })
      })      
    })
   return booksArray
  }

  /////////////////////Mi published////////////////////////////////
 
  getMyPublished(UserId:string){        
    var booksArray:Book[]=[]
    this.firestore.collectionGroup('book', ref =>ref.where('userOwner','==',UserId)).valueChanges({idField: 'eventId'}).subscribe(result =>{
      result.forEach(book  => {                      
          booksArray.push(book as Book) 
      })      
    })
   return booksArray
  }

  getDownloadCount(BookId:string){
   
    return this.firestore.collectionGroup('acquired', ref =>ref.where('book','==',BookId)).valueChanges({idField: 'eventId'})
    
    
    
  }
}

