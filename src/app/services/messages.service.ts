import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor( private firestore: AngularFirestore) {} 
  
  addmessage(transmitter:string,receiver:string,msg:string,subject:string){     
    return this.firestore.collection('messages').add({mailFrom:transmitter,rcptTo:receiver,Data:msg,Subject:subject}); 
  }
  getMessages(receiver:string){
    return this.firestore.collectionGroup('messages' ,ref =>  ref.where("rcptTo", "==", receiver)).valueChanges({idField: 'eventId'} )

  }
 
  removeMessage(messageId:string){     
    return this.firestore.collection("messages").doc(messageId).delete()
  }

 
}