import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {MatDialog} from '@angular/material/dialog';

import {first} from 'rxjs/operators' 
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
@Injectable()
export class AuthService {
  userState: any;
  constructor(
    //public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,    
  ) {
    this.userStateObs().subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user')!); /// Linea rara
      } else {
        localStorage.removeItem('user')
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  userStateObs(){
     return this.afAuth.authState
  }
  getUserName(){
    return this.userState.displayName
  }

  SignIn(email:string, password:string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {      
        
      })
      .catch((error) => {
        window.alert('Fallo en el inicio de sesion. Correo o contraseña incorreto')        
        //AQUI SE PRODUCE EL ERROR
      })
  }

  SignUp(email:string, password:string,name:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.afAuth.currentUser
          .then( user => user?.updateProfile({
            displayName:name
          }) )
        this.SendVerificationMail();     
        
      }).then(


      ).catch((error) => {
        window.alert(error.message)
      })

  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
  get isLoggedIn(): boolean {  
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }
  SendVerificationMail() {
      return this.afAuth.currentUser.then(u => u!.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verification']);
      })
  }    

  ForgotPassword(passwordResetEmail:string) {
    console.log('Banderita')
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  

  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // AuthLogin(provider: firebase.auth.AuthProvider) {
  //   return this.afAuth.signInWithPopup(provider)
  //   .then((result) => {
       
     
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }



    
    
}
  
