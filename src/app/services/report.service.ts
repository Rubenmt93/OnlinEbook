
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

firebase.initializeApp(environment.firebaseConfig)
 

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor( private firestore: AngularFirestore) {}

  
  
  addReportComment(commentId:string, uid:string,reason:string[]){       ;
    
    return this.firestore.collection('report').add({user:uid,comment:commentId,reason:reason});
 
  }
  addReportBook(bookId:string, uid:string,reason:string[]){       ;
    
    return this.firestore.collection('report').add({user:uid,book:bookId,reason:reason});
 
  }
}
