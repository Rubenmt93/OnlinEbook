import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  
  userEmail:string = ''
  constructor(private authService:AuthService,
              private router:Router,) {} 
    
  logout(){
       this.authService.SignOut()
       .then((error)=>{
         this.router.navigate(['/auth/login'])
       } )

      
   }
   isLogged(){    
    if( this.authService.isLoggedIn){
      this.userEmail=this.authService.getUserName()
      return true
    }
    return false
   }
   goHome(){
    this.router.navigate(['/'])
   }
  
  }
