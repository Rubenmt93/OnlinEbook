import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-mywanted',
  templateUrl: './mywanted.component.html',
  styleUrls: ['./mywanted.component.css']
})
export class MywantedComponent  {
  user:User
  items:  Book[]= [] 
  constructor( private bookService:BookService) {
    var aux=  localStorage.getItem('userOnlinebook');
    this.user= JSON.parse(aux!) as User            
    this.items=  this.bookService.getMyWanted(this.user.uid) 
  }
}
