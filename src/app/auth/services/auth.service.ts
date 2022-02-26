import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import {first} from 'rxjs/operators' 
@Injectable()
export class AuthService {

  constructor(private fireBaseAuth:AngularFireAuth ) { }

  async login( email:string,passwd:string){

    try{
      console.log('banana');
      
       return await this.fireBaseAuth.signInWithEmailAndPassword(email,passwd);
       
    }catch (err){
      console.log("Error en el login", err);
      return null
    } 
  }
  logout(){}
  
  async register( email:string,passwd:string){

    try{
      console.log('banana registrada');
      
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