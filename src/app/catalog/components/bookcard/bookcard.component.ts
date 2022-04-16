import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css']
})
export class BookcardComponent  {
   @Input() book:Book = {} as Book
  constructor() { 
 
  }
  router(id:string){
    console.log("id ->", id)
  }

}
