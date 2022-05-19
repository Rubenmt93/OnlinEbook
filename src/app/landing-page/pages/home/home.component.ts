import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
  logged:boolean=false
  styleborder:string=""
  constructor(private authservice:AuthService,) { 
    this.authservice.userStateObs().subscribe(user =>{
      if (user) {                
        this.logged=true       
      }else{
        this.logged=false
      }
      this.setStyle()
    });    
  }
  setStyle(){
    const element=document.getElementsByClassName("carrousel-container");
    if(this.logged){
      this.styleborder= "border-radius: 2rem 2rem 0 40%"
    }else{
      this.styleborder= "border-radius: 2rem 2rem 0 0"
    }
  }  
}
