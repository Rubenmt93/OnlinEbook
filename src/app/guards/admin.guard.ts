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
  user!:any
  admin:boolean=false
  constructor(private authService:AuthService,
            private userService:UserService){
    this.authService.userStateObs().subscribe(user =>{       
        if(user){
           
            this.userService.getUserById(user?.uid).subscribe(result=>{
               var usuario = result as User
               if(usuario.rol==1){
                this.admin=true
               }else{
                this.admin=false
               }
            })
        }else{
            this.admin=false
        }                                      
     
    });


  }
  canActivate(): Observable<boolean> | Promise<boolean > | boolean   {
     return this.admin
  }
  canLoad(   ): Observable<boolean> | Promise<boolean> | boolean  {
    return this.admin
  }
}
