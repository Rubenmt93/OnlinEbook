import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent  {
  user:any;
  constructor(private authservice:AuthService) {
   this.user = JSON.parse( localStorage.getItem('userOnlinebook')!)     
  }
  resendMail(){
    this.authservice.SendVerificationMail()
  }  
}
