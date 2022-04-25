import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Relation } from 'src/app/interfaces/relation';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  
  bookId!:string
  book!:Book
  userLogged:string=""
  bought:boolean=true

  constructor(private bookService:BookService,
              private authservice:AuthService,
              private activatedRoute:ActivatedRoute,) {
                this.activatedRoute.params.subscribe(({id})=> this.bookId=id)
                this.bookService.getBookById(this.bookId).subscribe(result =>{
                  this.book=result as Book      
                  this.book.eventId=this.bookId
                })
               }
 
  
}
