import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
 
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
