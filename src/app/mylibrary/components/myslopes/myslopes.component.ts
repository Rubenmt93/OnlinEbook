import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-myslopes',
  templateUrl: './myslopes.component.html',
  styleUrls: ['./myslopes.component.css']
})
export class MyslopesComponent {
  user:User
  items:  Book[]= [] 
  constructor( private bookService:BookService) {
    var aux=  localStorage.getItem('userOnlinebook');
    this.user= JSON.parse(aux!) as User            
    this.items=  this.bookService.getMySlopes(this.user.uid) 
  }
}
