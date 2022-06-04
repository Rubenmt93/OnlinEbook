import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor( private firestore: AngularFirestore) {} 
  
  addmessage(transmitter:string,receiver:string,msg:string){       
    console.log(transmitter);
    console.log(receiver);
    console.log(msg);
    
    return this.firestore.collection('messages').add({transmitter:transmitter,receiver:receiver,msg:msg}); 
  }
  getMessages(receiver:string){
    return this.firestore.collectionGroup('messages' ,ref =>  ref.where("receiver", "==", receiver)).valueChanges({idField: 'eventId'} )

  }
 
  removeMessage(messageId:string){     
    return this.firestore.collection("likes").doc(messageId).delete()
  }

 
}