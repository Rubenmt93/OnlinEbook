import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {MatDialog} from '@angular/material/dialog';

import {first} from 'rxjs/operators' 
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
@Injectable()
export class AuthService {
  userState: any;
  constructor( public afAuth: AngularFireAuth,
               public router: Router,) {
    this.userStateObs().subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('userOnlinebook', JSON.stringify(this.userState));
         JSON.parse(localStorage.getItem('userOnlinebook')!); /// Linea rara
      } else {
        localStorage.removeItem('userOnlinebook')
         JSON.parse(localStorage.getItem('userOnlinebook')!);
      }
    });
  }
  userStateObs(){
     return this.afAuth.authState
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
    return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('userOnlinebook');
      this.router.navigate(['/auth/login']);
    })
  }  
  SendVerificationMail() {
      return this.afAuth.currentUser.then(u => u!.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/auth/verifyEmail']);
      })
  }    

  ForgotPassword(passwordResetEmail:string) {
    
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Enviado correo de recuperacion de cuenta');
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
  
