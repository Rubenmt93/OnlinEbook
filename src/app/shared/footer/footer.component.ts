import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private overlay:Overlay ) { }

  ngOnInit(): void {
  }
  dialogTerms(){
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(DialogTerms,{scrollStrategy});
  }
  dialogContact(){
    this.dialog.open(DialogContact);
  }
  dialogAbout(){
    this.dialog.open(DialogAbout);
  }

}

@Component({
  selector: 'dialog-passwd-dialog',
  templateUrl: '../dialogs/about-dialog.html',
})
export class DialogAbout {
  constructor(public dialogRef: MatDialogRef<DialogAbout>,) {}  
  forgotPasswd(){}
}

@Component({
  selector: 'dialog-passwd-dialog',
  templateUrl: '../dialogs/terms-dialog.html',
})
export class DialogTerms {
  constructor(public dialogRef: MatDialogRef<DialogTerms>,) {}  
  forgotPasswd(){}
}

@Component({
  selector: 'dialog-passwd-dialog',
  templateUrl: '../dialogs/contact-dialog.html',
})
export class DialogContact {
  constructor(public dialogRef: MatDialogRef<DialogContact>,) {}  
  forgotPasswd(){}
}