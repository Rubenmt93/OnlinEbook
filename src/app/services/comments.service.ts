
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';
firebase.initializeApp(environment.firebaseConfig)
 
@Injectable({
  providedIn: 'root'
})
export class CommentsService { 

  

  constructor( private firestore: AngularFirestore) {
    
    
  }

  getCommentsBook(BookId:string){    
    return this.firestore.collectionGroup('comments' ,ref =>  ref.where("bookId","==",BookId)).valueChanges({idField: 'eventId'})
  }
  
  addlike(commentId:string, uid:string){    
    
    return this.firestore.collection('likes').add({user:uid,comment:commentId});
 
  }
  getLikedComment(uid:string,commentId:string){
    return this.firestore.collectionGroup('likes' ,ref =>  ref.where("user", "==", uid).where("comment","==",commentId)).valueChanges({idField: 'eventId'} )

  }
  getCommentById(commentId:string){
    return this.firestore.collection('comments').doc(commentId).valueChanges({idField: 'eventId'})
  }
  removeLikedComment(likedId:string){     
    return this.firestore.collection("likes").doc(likedId).delete()
  }

   getLikes(commentId:string){
    return this.firestore.collectionGroup('likes' ,ref =>  ref.where("comment","==",commentId)).valueChanges({idField: 'eventId'} )

  }
  getReports(commentId:string){
    return this.firestore.collectionGroup('report' ,ref =>  ref.where("comment","==",commentId)).valueChanges({idField: 'eventId'} )
  }
  addComment(bookId:string,msg:string, userId:string){
    return this.firestore.collection('comments').add({userId:userId,bookId:bookId,msg:msg});
  }
  removeComment(commentId:string){
    this.firestore.collection("comments").doc(commentId).delete()
    this.getLikes(commentId).subscribe(result=>{
      console.log(result);
      
      result.forEach(like =>{
        this.firestore.collection("likes").doc(like.eventId).delete()
       
       
      })
    })
    this.getReports(commentId).subscribe(result=>{
      console.log(result);
      result.forEach(report =>{
        this.firestore.collection("report").doc(report.eventId).delete()
       
      
      })
    })

  }
}