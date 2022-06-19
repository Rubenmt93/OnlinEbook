import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  userObject:any
  userLogged:boolean=false;
  admin:User={
    rol: 0,
    uid: '',
    email: '',
    userName: '',
    img: ''
  }
  constructor(private authService:AuthService,
              private userService:UserService) {                
                this.authService.userStateObs().subscribe(user =>{
                  if (user) {             
                    this.userObject= JSON.parse( localStorage.getItem('userOnlinEbook')!   )  
                             
                    this.userLogged=true;                                  
                  }else{                    
                    this.userLogged=false;
                  }
                  var aux = JSON.parse(localStorage.getItem('userOnlinebook')!) as User ;  
                  if(aux){
                    this.userService.getUserById(aux.uid).subscribe(result => {
                      this.admin=result as User
                   })
                  } 
                });
                          
               
              } 
              
    
  
   
  
  
  }
