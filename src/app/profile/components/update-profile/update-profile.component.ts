import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent  {

  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  showPasswd :boolean = true;
  imgURL:any= "../../../../assets/avatar-placeholder.png"
  files:File[] = []  
  user:any

  
  updateProfileForm: FormGroup = this.fb.group({
    file: [this.imgURL],
    email: ["",[Validators.required,Validators.pattern(this.emailPattern)]],    
    username: ["",[Validators.required,Validators.minLength(3)]],
    
  })
  constructor(private fb: FormBuilder,
              private authservice:AuthService,
              private router:Router) { 
                this.user = JSON.parse( localStorage.getItem('userOnlinebook')!   )      
                this.updateProfileForm.controls['email'].setValue(this.user.email)    
                this.updateProfileForm.controls['username'].setValue(this.user.displayName)   
                this.imgURL= this.user.photoURL   
  }         
  
  validezCampo(campo: string){
    return this.updateProfileForm.controls[campo].errors && this.updateProfileForm.controls[campo].touched

  }
  

  uploadFile(event: any) {     
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onloadend=() => {
      this.imgURL=reader.result
    }
    this.updateProfileForm.controls['file'].markAsTouched()
    
  }
  updateProfile(){     
    var email=this.updateProfileForm.controls['email'].value
    var file=this.imgURL
    var userName=this.updateProfileForm.controls['username'].value    
    
    if(this.updateProfileForm.controls['email'].untouched){
       email=null   
    }
    if(this.updateProfileForm.controls['file'].untouched){
     file=null
    }
    if(this.updateProfileForm.controls['username'].untouched){
      userName= null
    }
    this.authservice.UpdateUserInfo(email,userName,file).then(msg => console.log('Perfil Actualizado')).catch()
      }

}