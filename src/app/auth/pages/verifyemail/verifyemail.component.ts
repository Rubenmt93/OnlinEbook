import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['../../auth.css']
})
export class VerifyemailComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.userStateObs().subscribe(user =>{
      if (user) {          
        console.log(user)
      }
    });
   }
  
  ngOnInit(): void {
  }

}
