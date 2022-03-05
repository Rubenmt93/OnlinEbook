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
        this.user=user.displayName!                                    
      }
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean   {
    if(this.user){
        this.var=true
    }
        console.log('CanActivate->',this.var)
        console.log(route);
        return this.var
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
      if(this.user){
        this.var=true
    }
        console.log('CanLoad->',this.var)
        console.log(route);        
        return this.var
  }
}
