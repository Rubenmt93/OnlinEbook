import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmedValidator } from '../../../auth/confirmed.validators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-change-passwd',
  templateUrl: './change-passwd.component.html',
  styleUrls: ['./change-passwd.component.css']
})
export class ChangePasswdComponent {
  showPasswd :boolean = true; 
  user:any  
  changePasswdForm: FormGroup = this.fb.group({
    originalPasswd: ['',[Validators.required,Validators.minLength(6)]],
    newPasswd: ['',[Validators.required,Validators.minLength(6)]],
    newPasswdConfirm: ['',[Validators.required,Validators.minLength(6)]],    
  },{ 
    validator: ConfirmedValidator('newPasswd', 'newPasswdConfirm')  
  })
  constructor(private fb: FormBuilder,
              private authservice:AuthService,             
              public dialog: MatDialog) { 
                this.user = JSON.parse( localStorage.getItem('userOnlinebook')!)    
  }         
  
  validezCampo(campo: string){
    return this.changePasswdForm.controls[campo].errors && this.changePasswdForm.controls[campo].touched
  }
  matchPasswd(){
    const passwd1 = this.changePasswdForm.controls['newPasswd'].value
    const passwd2 = this.changePasswdForm.controls['newPasswdConfirm'].value
    if(passwd1 !== passwd2 && this.changePasswdForm.controls['newPasswd'].touched  && this.changePasswdForm.controls['newPasswdConfirm'].touched){
      return true      
    }    
    return false
  }
 
  async changePasswd(){     
    var currentPasswd=this.changePasswdForm.controls['originalPasswd'].value
    var newPasswd=this.changePasswdForm.controls['newPasswd'].value     
    if(await this.authservice.updatePasswd(currentPasswd, newPasswd)){
      this.dialog.open(DialogChangePasswd);
    }else{
      this.dialog.open(DialogChangePasswdFail);
      this.changePasswdForm.reset()
    }    
  } 
}

@Component({
  selector: 'confirm-change-passwd-dialog',
  templateUrl: 'change-passwd-dialog.html',
  styleUrls: ['./change-passwd.component.css']
})
export class DialogChangePasswd {
  constructor(private router:Router,
              public dialogRef: MatDialogRef<DialogChangePasswd>) {}          
  confirm(){    
    this.dialogRef.close();
    this.router.navigate(['/profile/info']);
  }
}


@Component({
  selector: 'failure-change-passwd-dialog',
  templateUrl: 'change-passwd-dialog-fail.html',
  styleUrls: ['./change-passwd.component.css']
})
export class DialogChangePasswdFail {
  constructor(private router:Router,
              public dialogRef: MatDialogRef<DialogChangePasswd>) {}          
  confirm(){    
    this.dialogRef.close();   
  }
}