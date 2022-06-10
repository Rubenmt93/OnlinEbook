import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../confirmed.validators';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:  ['../../auth.css']
})
export class RegisterComponent{
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  showPasswd :boolean = true;
  imgURL:any= "./assets/avatar-placeholder.png"
  files:File[] = []
  registerForm: FormGroup = this.fb.group({
    file: [this.imgURL],
    email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    passwd: ['123456',[Validators.required,Validators.minLength(6)]],
    passwdConfirm: ['123456',[Validators.required,Validators.minLength(6)]],   
    username: ['nombrePrueba',[Validators.required,Validators.minLength(3)]],
    
  },{ 
    validator: ConfirmedValidator('passwd', 'passwdConfirm')
  })
  constructor(private fb: FormBuilder,
              private authservice:AuthService,
              private router:Router) { 
  }  

  validezCampo(campo: string){
    return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched

  }
  matchPasswd(){
    if (this.registerForm.controls['passwd'].value !== this.registerForm.controls['passwdConfirm'].value 
        &&  this.registerForm.controls['passwd'].touched && this.registerForm.controls['passwdConfirm'].touched){
      return true
    }
    return false
  }
  
  uploadFile(event: any) {     
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onloadend=() => {
      this.imgURL=reader.result
    }
    
  }
  register(){     
    const email=this.registerForm.controls['email'].value;
    const passwd=this.registerForm.controls['passwd'].value;  
    const name=this.registerForm.controls['username'].value;   
    this.authservice.SignUp(email,passwd,name,this.imgURL).then(resp =>{
      this.router.navigate(['/']);
    })
  }

}