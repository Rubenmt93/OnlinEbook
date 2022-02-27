import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../confirmed.validators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-short-register',
  templateUrl: './short-register.component.html',
  styleUrls: ['./short-register.component.css']
})
export class ShortRegisterComponent { 
 
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  registerForm: FormGroup = this.fb.group({
    email     : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    passwd1    : ['',[Validators.required,Validators.minLength(6)]],
    passwd2    : ['',[Validators.required,Validators.minLength(6)]],   
    username  : ['',[Validators.required,Validators.minLength(3)]],    
  },{ 
    validator: ConfirmedValidator('passwd1', 'passwd2')
  })
  constructor(private fb: FormBuilder, private authservice:AuthService) { }  

  validezCampo(campo: string){
    return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched
  }
  matchPasswd(){
      if (this.registerForm.controls['passwd1'].value !== this.registerForm.controls['passwd1'].value 
            &&  this.registerForm.controls['passwd1'].touched && this.registerForm.controls['passwd1'].touched){
              return true
      }
      return false
  }
  register(){    
    this.authservice.register(this.registerForm.controls['email'].value,this.registerForm.controls['passwd1'].value)
  }


}
