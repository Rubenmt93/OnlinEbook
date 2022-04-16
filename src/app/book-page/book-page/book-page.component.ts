import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
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
  constructor(private bookService:BookService,
              private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(({id})=> this.id=id)
    this.bookService.getBookById(this.id).subscribe(result =>{
      this.book=result as Book      
    })
   
  }

  goPdf(){
   console.log("estoy");
   
    window.location.href = this.book.link!;

  }

}
