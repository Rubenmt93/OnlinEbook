import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
firebase.initializeApp(environment.firebaseConfig)
@Injectable()
export class AuthService {
  userState: any;
  storageRef=firebase.app().storage().ref()
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
  getUser(){
    return this.userState
  }

  SignIn(email:string, password:string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {     
        //aqui pon el localstorsage
        
      })
      .catch((error) => {
        window.alert('Fallo en el inicio de sesion. Correo o contraseña incorreto')        
        //AQUI SE PRODUCE EL ERROR
      })
  }

  SignUp(email:string, password:string,name:string,img64:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {        
        this.afAuth.currentUser
        .then( user => {     
          this.SubirImagen(user?.uid!,img64)
          .then(imgUrl => {
            user?.updateProfile({ displayName:name, photoURL:imgUrl })           
            .then(resp => {
              if (user) {
                this.userState = user;
                localStorage.setItem('userOnlinebook', JSON.stringify(this.userState));
              }     
            })
            .then(resp=>{
              this.SendVerificationMail()
            })
          })        
        })        
      }).catch((error) => {
         window.alert(error.message)
     })
}
  SignOut() {
    return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('userOnlinebook');     
    })
  }  
  SendVerificationMail() {
      return this.afAuth.currentUser.then(u => u!.sendEmailVerification())
      .then(() => {
       
      }).catch()
  }    

  ForgotPassword(passwordResetEmail:string) {
    
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Enviado correo de recuperacion de cuenta');
    }).catch((error) => {
      window.alert(error)
    })
  }

  async SubirImagen( uid:string, img64:any){      
      try{
        let respuesta = await this.storageRef.child("users/"+uid).putString(img64,'data_url')
        return await respuesta.ref.getDownloadURL()
      }catch (error){
        window.alert(error)
        return null
      }
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
  
