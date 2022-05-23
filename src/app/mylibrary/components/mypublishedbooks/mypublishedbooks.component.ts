import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-mypublishedbooks',
  templateUrl: './mypublishedbooks.component.html',
  styleUrls: ['./mypublishedbooks.component.css']
})
export class MypublishedbooksComponent {
  user:User
  items:  Book[]= [] 
  constructor( private bookService:BookService) {
    var aux=  localStorage.getItem('userOnlinebook');
    this.user= JSON.parse(aux!) as User  
    this.items=[]                 
    this.items=  this.bookService. getMyPublished(this.user.uid)     
  }
}
