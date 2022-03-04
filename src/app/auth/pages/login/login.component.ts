import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../auth.css']
})
export class LoginComponent  {
  showPasswd :boolean = true
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //failLoginflag:boolean=false
  loginForm: FormGroup = this.fb.group({
    email: ['zegreo@gmail.com',[Validators.required,Validators.pattern(this.emailPattern)]],
    passwd: ['carpediem',Validators.required]
  })
  
  
  constructor(private fb: FormBuilder, 
              private authservice:AuthService,
              private router:Router,
              public dialog: MatDialog) {
    this.authservice.userStateObs().subscribe(user =>{
      if (user) {                    
         if(!user.emailVerified){
           this.router.navigate(['/auth/verifyEmail'])
          }else{          
            this.router.navigate(['/'])
          }
       
      }
    });
  }


  
  validezCampo(campo:string){
   return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched

  }
 
  forgotPasswd(){
    this.dialog.open(DialogPasswd);
  }
 
  login(){      
    
    const email=this.loginForm.controls['email'].value;
    const passwd=this.loginForm.controls['passwd'].value;  

    this.authservice.SignIn( email, passwd )
    .then((result) => {        
            
    }).catch((error) => {
      console.log('el .catch')
      
    })    
  
  }
  
}
@Component({
  selector: 'dialog-passwd-dialog',
  templateUrl: 'dialog-passwd.html',
})
export class DialogPasswd {
  constructor(private fb: FormBuilder,
              private authservice:AuthService,
              public dialogRef: MatDialogRef<DialogPasswd>,
              ) {}
  
              emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  passwdForm: FormGroup = this.fb.group({
    email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],   
  })


  forgotPasswd(){
    
    const email=this.passwdForm.controls['email'].value;
    this.authservice.ForgotPassword(email).then(resp =>{
      this.dialogRef.close();
    })
  }
}