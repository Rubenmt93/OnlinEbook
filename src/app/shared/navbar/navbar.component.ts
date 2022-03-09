import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  
  userLogged:boolean=false;
  constructor(private authService:AuthService,
              private router:Router,) {                
                this.authService.userStateObs().subscribe(user =>{
                  if (user) {                           
                    this.userLogged=true;                                  
                  }else{                    
                    this.userLogged=false;
                  }
                });
              } 
    
  logout(){
       this.authService.SignOut()
       .then((error)=>{
         this.router.navigate(['/auth/login'])
       } )

       
   }
   
   goHome(){
    this.router.navigate(['/'])
   }
   
  
  
  }
