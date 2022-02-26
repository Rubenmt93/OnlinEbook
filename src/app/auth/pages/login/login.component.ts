import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide :boolean = true
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  loginForm: FormGroup = this.fb.group({
    email: ['zegreo@gmail.com',[Validators.required,Validators.pattern(this.emailPattern)]],
    passwd: ['carpediem',Validators.required]
  })
  constructor(private fb: FormBuilder, private authservice:AuthService) { }

  
  validezCampo(campo:string){
   return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched

  }
  login(){
    console.log();
  
    this.authservice.login(this.loginForm.controls['email'].value,this.loginForm.controls['passwd'].value)
    this.getlocaluser()

  }
  async getlocaluser(){
    const user = await this.authservice.getCurrentuser();
    if(user){
      console.log('User ->', user.email);
      
    }else{
      console.log('no user');
      
    }
  }
}
