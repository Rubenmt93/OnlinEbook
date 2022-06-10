import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-verify',
  templateUrl: './dialog-verify.component.html',
  styleUrls: ['./dialog-verify.component.css']
})
export class DialogVerifyComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private authservice:AuthService,) { 
    this.authservice.userStateObs().subscribe(user =>{
      if (user) {                  
        if(!user.emailVerified)  {
          this.dialog.open(DialogVerifyDialog);
        }     
      }
    });
  
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'dialog-Verify',
  templateUrl: 'verify-dialog.html',
  styleUrls: ['./dialog-verify.component.css']
})
export class DialogVerifyDialog {
  constructor(public dialogRef: MatDialogRef<DialogVerifyDialog>,
              private authService:AuthService) {}        
  resendVerifyMail(){    
    this.authService.SendVerificationMail()  
  }
}