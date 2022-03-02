import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../confirmed.validators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:  ['../../auth.css']
})
export class RegisterComponent{
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  showPasswd :boolean = true
  registerForm: FormGroup = this.fb.group({
    email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    passwd: ['',[Validators.required,Validators.minLength(6)]],
    passwdConfirm: ['',[Validators.required,Validators.minLength(6)]],   
    username: ['',[Validators.required,Validators.minLength(3)]],
    
  },{ 
    validator: ConfirmedValidator('passwd', 'passwdConfirm')
  })
  constructor(private fb: FormBuilder, private authservice:AuthService) { }

  

  validezCampo(campo: string){
    return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched

  }
  matchPasswd(){
      if (this.registerForm.controls['passwd'].value !== this.registerForm.controls['passwdConfirm'].value 
            &&  this.registerForm.controls['passwd'].touched && this.registerForm.controls['passwd'].touched){
              return true
      }
      return false
  }
  register(){
    const email=this.registerForm.controls['email'].value;
    const passwd=this.registerForm.controls['passwd'].value;  
    const name=this.registerForm.controls['username'].value;   
    this.authservice.SignUp(email,passwd,name)


    
  }



}