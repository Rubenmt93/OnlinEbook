import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css']
})
export class BookcardComponent implements OnInit  {
   @Input() book:Book = {} as Book
   id:string=""
  constructor(private BookService:BookService) {}
  ngOnInit(): void {   
    if(this.book.eventId){
      this.id=this.book.eventId
    }else{
      this.id=this.book.objectID
    }    
  }  
}
