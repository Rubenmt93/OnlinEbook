import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  book:Book ={
    eventId:       "",
    active:         true,
    author:         "Author",
    categories:    [""],
    img:            "https://galapagos-pro.com/wp-content/uploads/2021/03/book-placeholder.jpg",
    isbn:          "000000000000",
    link:         "",
    name:           "Book name",
    price:         0,
    userOwner:     "",
    year:          9999,
    abstract:       "",

  }
  id!:string
  userLogged!:boolean| string
  bought:boolean=false

  constructor(private bookService:BookService,
              private activatedRoute:ActivatedRoute,
              private authservice:AuthService) { 
    this.activatedRoute.params.subscribe(({id})=> this.id=id)
    this.bookService.getBookById(this.id).subscribe(result =>{
      this.book=result as Book      
    })

    this.authservice.userStateObs().subscribe(user =>{
      if (user) {             
          this.userLogged=user.uid                    
      }else{                    
          this.userLogged=false
      }
    });
   
  }

  goPdf(){
   console.log("estoy");
   
    window.location.href = this.book.link!;

  }
  buy(){
    this.bought=!this.bought
  }
}
