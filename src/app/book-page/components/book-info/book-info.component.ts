import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../../services/report.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent  {
  @Input() book!:Book 
  
  bookId:string=""
  user:User
  constructor(private reportService:ReportService,
              private activatedRoute:ActivatedRoute,
              public dialog: MatDialog) {
  
  
    this.activatedRoute.params.subscribe(({id})=> {this.bookId=id})    
    this.user = JSON.parse(localStorage.getItem('userOnlinebook')!)
  }
  
  reportBook(){
    var dialogRef =this.dialog.open(ReportDialogBook);
    dialogRef.afterClosed().subscribe(result => {
     var aux:string[] = result as string[]
     
     this.reportService.addReportBook(this.bookId,this.user.uid,aux)
      
    });
    
  }
  

}
@Component({
  selector: 'dialog-report',
  templateUrl: './dialog-report.html',
  styleUrls: ['./book-info.component.css']
})
export class ReportDialogBook {
  constructor(private fb: FormBuilder,              
              public dialogRef: MatDialogRef<ReportDialogBook>,
              ) {}  
  
  reportForm: FormGroup = this.fb.group({
    list: ["",[Validators.required] ]
  })
  
  reasonList: string[] = ['El libro es incorrecto', 'El libro vulnera los derechos de la plataforma', 'El libro es engañoso', 'Expresa intenciones de suicidio','El libro vulnera los derechos de autor de otra persona'];

  sendReport(){}
}