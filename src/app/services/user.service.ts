import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private firestore: AngularFirestore) { }
  getUserById(id:string){
    
    return this.firestore.collection('user').doc(id).valueChanges()
  }
  createUserTable(uid:string,img:string,userName:string,email:string){
   
    return this.firestore.collection('user').doc(uid).set({
      email: email,
      rol: 0,
      userName: userName,
      img: img
    });
  }
  updateUser(uid:string,img:string,userName:string,email:string){
    return this.firestore.collection('user').doc(uid).set({
      email: email,
      rol:0,
      userName: userName,
      img: img
    });
  }
}
