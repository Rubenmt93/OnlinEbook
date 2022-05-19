import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { BookService } from '../../../services/book.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  showPasswd :boolean = true;
  PortadaURL:any= "../../../../assets/book-placeholder.png"
  filePDF:string = ""
  
  publiForm: FormGroup = this.fb.group({
    filePDF: [this.filePDF],
    filePortada: [this.PortadaURL],
    author: [,[Validators.required]],
    abstract: ['',[Validators.required]],
    categories: [,[Validators.required]],   
    isbn: ['',[Validators.required]],
    name: ['',[Validators.required]],
    price: [,[Validators.required]],
    year:[,[Validators.required]],
    list: [,[Validators.required] ],
  })
  categoriasList: string[] = ['Terror','Biografia','Leyendas','Thriller','Policiaca', 'Fantasia','Educativo','Peosia','Drama','Infantil','Romantica','Futurista','Otro']; 
  user:User
  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private bookService:BookService,
              private router:Router) {               
  this.user = JSON.parse(localStorage.getItem('userOnlinebook')!)
  }  

  validezCampo(campo: string){
    return this.publiForm.controls[campo].errors && this.publiForm.controls[campo].touched

  }  
  
  uploadImg(event: any) {     
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onloadend=() => {
      this.PortadaURL=reader.result
    }
    
  }
  uploadPdf(event: any) {     
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onloadend=() => {
    this.publiForm.controls['filePDF'].setValue(reader.result)
    }        
  }
  addBook(){        
    var author = this.publiForm.controls['author'].value;
    var name = this.publiForm.controls['name'].value
    var abstract = this.publiForm.controls['abstract'].value
    var categories = this.publiForm.controls['categories'].value
    var isbn = this.publiForm.controls['isbn'].value
    var price = this.publiForm.controls['price'].value
    var year = this.publiForm.controls['year'].value
    var file= this.publiForm.controls['filePDF'].value
    
    this.bookService.createBook(author,
                                categories,
                                isbn, 
                                name,
                                year,
                                price,
                                this.user.uid,
                                this.PortadaURL,
                                file,abstract).then( result => {                                                           
      var dialogRef =this.dialog.open(AddBookDialog); 
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/mylibrary/myPublishedBooks']);    
      });    
    })
  }
}

@Component({
  selector: 'dialog-bookCreate',
  templateUrl: './dialog-bookCreate.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookDialog {
  constructor(public dialogRef: MatDialogRef<AddBookDialog>) {}      
  sendReport(){}
}