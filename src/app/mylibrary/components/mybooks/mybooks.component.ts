import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent {
  user:User
  items:  Book[]= [] 
  constructor( private bookService:BookService) {
    var aux=  localStorage.getItem('userOnlinebook');
    this.user= JSON.parse(aux!) as User            
    this.items=  this.bookService.getMyBooks(this.user.uid)    
  }
}