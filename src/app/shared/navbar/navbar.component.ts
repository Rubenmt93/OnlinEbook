import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  public user: Observable<any> = this.authService.fireBaseAuth.user;

  constructor(private authService:AuthService) { } 

  logout(){
    this.authService.logout();   
    
  }
}
