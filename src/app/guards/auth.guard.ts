import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  user:string|null=null
  var:boolean=false
  constructor(private authService:AuthService){
    this.authService.userStateObs().subscribe(user =>{
      if (user) {                    
        this.user=user.email!                                    
      }
    });
  }
  canActivate(): Observable<boolean> | Promise<boolean > | boolean   {
     this.user = localStorage.getItem('userOnlinebook');
     if(this.user){
      return true
     }
     return false
  }
  canLoad(   ): Observable<boolean> | Promise<boolean> | boolean  {
      if(this.user){
        this.var=true
      }
             
        return this.var
  }
}
