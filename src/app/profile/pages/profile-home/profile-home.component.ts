import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
  userName:string="";
  userPhoto:string|null="";
  userEmail:string="";
  showFiller = false;
  constructor(private authService:AuthService,
              private router:Router ) {
                this.authService.userStateObs().subscribe(user =>{
                  if (user) {      
                    console.log(user)              
                    this.userName=user.displayName!    
                    this.userEmail=user.email! 
                    this.userPhoto=user.photoURL                               
                  }
                });              
              
               } 
  ngOnInit(): void {
    
    
  }
  logout(){
    this.authService.SignOut()
    .then((error)=>{
      this.router.navigate(['/auth/login'])
    })

   
}

}
