import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  user:User ={
    rol: 0,
    uid: '',
    email: '',
    userName: '',
    img: ''
  }
  admin:boolean=false
  constructor(private authService:AuthService,
              private userService:UserService){    
    var aux = JSON.parse(localStorage.getItem('userOnlinebook')!) as User ;              
    this.userService.getUserById(aux.uid).subscribe(result => {
      this.user=result as User
    })

  }
  canActivate(): Observable<boolean> | Promise<boolean > | boolean  {    
    if(this.user.rol ==1){
      return true 
    }
    return false       
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean  {        
    if(this.user.rol ==1){
      return true
    }
     return false          
  }
}
