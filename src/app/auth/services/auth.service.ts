import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import {first} from 'rxjs/operators' 
@Injectable()
export class AuthService {

  constructor(public fireBaseAuth:AngularFireAuth ) { }

  async login( email:string,passwd:string){
    try{     
       return await this.fireBaseAuth.signInWithEmailAndPassword(email,passwd);       
    }catch (err){
      console.log("Error en el login", err);
      return null
    } 
  }
  async logout(){
    try{
      await this.fireBaseAuth.signOut();
    }
    catch  (err){
      console.log("Error en el logout", err);
    }
    
  }
  
  async register( email:string,passwd:string){
    try{       
      return await this.fireBaseAuth.createUserWithEmailAndPassword(email,passwd)
    }catch (err){
      console.log("Error en el register", err);
      return null
    } 
  }

  getCurrentuser(){
    return  this.fireBaseAuth.authState.pipe(first()).toPromise();
  }

}