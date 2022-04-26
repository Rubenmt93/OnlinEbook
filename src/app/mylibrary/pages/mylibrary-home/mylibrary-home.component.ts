import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylibrary-home',
  templateUrl: './mylibrary-home.component.html',
  styleUrls: ['./mylibrary-home.component.css']
})
export class MylibraryHomeComponent implements OnInit {

  userObject:any
  opened=true
  showFiller = false;
  constructor(private authService:AuthService,
              private router:Router ) {
    this.authService.userStateObs().subscribe(user =>{
      if (user) {      
        console.log(user)              
        this.userObject= user                            
      }
    });              
    if(window.matchMedia("(max-width: 700px)").matches){
      this.opened=false
    }
} 
ngOnInit(): void {
  this.userObject= JSON.parse( localStorage.getItem('userOnlinebook')!   )   
}
logout(){
  this.authService.SignOut()
  .then((error)=>{
    this.router.navigate(['/auth/login'])
  })
  
  }
}
