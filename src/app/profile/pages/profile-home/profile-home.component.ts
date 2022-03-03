import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
  user:string="";
  constructor(private authService:AuthService,
              private router:Router ) {
                this.authService.userStateObs().subscribe(user =>{
                  if (user) {                    
                    this.user=user.displayName!                                    
                  }
                });
               } 
 
  

  ngOnInit(): void {
    
    
  }
  logout(){
    this.authService.SignOut()
    .then((error)=>{
      this.router.navigate(['/auth/login'])
    } )

   
}

}
