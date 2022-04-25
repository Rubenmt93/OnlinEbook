import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent  {
  @Input() book:Book 
  
  
 
  constructor() {
   this.book={
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
  
    
  }
  

  

}
