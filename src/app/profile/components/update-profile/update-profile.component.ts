
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
              private router:Router,
              public dialog: MatDialog) { 
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
  async updateProfile(){     
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
    
    var result=  await this.authservice.UpdateUserInfo(email,userName,file)
    switch(result){
      case 0: {
        this.dialog.open(DialogUpdateProfile);
        break
      } 
      case 1:{
        this.dialog.open(DialogUpdateProfileReautenticate,{data:{email:email,userName:userName,file:file}})
        break
      }
      default:{
        this.dialog.open(DialogUpdateProfileFailure)
        this.updateProfileForm.reset();
      }
    }
     
    
  }

}

@Component({
  selector: 'confirm-update-profile-dialog',
  templateUrl: 'update-profile-dialog.html',
  styleUrls: ['./update-profile.component.css']
})
export class DialogUpdateProfile {
  constructor(private router:Router,
              public dialogRef: MatDialogRef<DialogUpdateProfile>) {}          
  confirm(){    
    this.dialogRef.close();
    this.router.navigate(['/profile/info']);

  }
}
@Component({
  selector: 'update-profile-dialog-reautenticate',
  templateUrl: 'update-profile-dialog-reautenticate.html',
  styleUrls: ['./update-profile.component.css']
})
export class DialogUpdateProfileReautenticate {
  constructor(private router:Router,
              public dialogRef: MatDialogRef<DialogUpdateProfileReautenticate>, 
              private fb: FormBuilder,
              private authservice:AuthService) {}  
  showPasswd:boolean=true   
  passwdFail=false   
  reautenticateForm: FormGroup = this.fb.group({
    passwd: ['',[Validators.required,Validators.minLength(6)]],   
  })         
  async confirm(){    
    // this.dialogRef.close();    
    //TODO: Llamada a reautenticate y a la vuelta llamo de nuevo 
    
    
    var password= this.reautenticateForm.controls['passwd'].value
    if ( await this.authservice.reautenticateUser(password)){
        this.dialogRef.close();
    }else{
      this.passwdFail=true
      this.reautenticateForm.reset();
    }
  }
  getPasswdFail(){
    return this.passwdFail
  }
}

@Component({
  selector: 'failure-update-profile-dialog',
  templateUrl: 'failure-update-profile-dialog.html',
  styleUrls: ['./update-profile.component.css']
})
export class DialogUpdateProfileFailure {
  constructor(private router:Router,
              public dialogRef: MatDialogRef<DialogUpdateProfileFailure>){}
              
  confirm(){    
    this.dialogRef.close();    
    //TODO: Llamada a reautenticate y a la vuelta llamo de nuevo 
  }
}


  



