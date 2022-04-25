import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Relation } from 'src/app/interfaces/relation';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-page-buttons',
  templateUrl: './book-page-buttons.component.html',
  styleUrls: ['./book-page-buttons.component.css']
})
export class BookPageButtonsComponent {
  acquired:boolean = false
  userId:string=""
  @Input('book') book!:Book
  constructor(private bookService:BookService,
              private authService:AuthService,
              private router:Router,) {                

    this.authService.userStateObs().subscribe(user =>{
      if (user) {             
        this.userId=user.uid                    
      }else{                    
        this.userId=""
      }
      
      });
      
  }
 


  goPdf(){  
    

    this.bookService.getAcquiredBook(this.userId,this.book.eventId)
      .subscribe(result =>{
        console.log(result);
        
    })
    // window.location.href = this.book.link!;

  }
  buy(){
    this.acquired=!this.acquired
    //this.bookService.bougth(this.userLogged,this.bookId)
  }
  checkBook(book:any){
    console.log(book);
    
  }
  navigateLogin(){
    this.router.navigate(['/auth/login'])
  }
  

}
