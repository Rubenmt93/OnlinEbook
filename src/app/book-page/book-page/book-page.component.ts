import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

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
  active:boolean=false
  admin:User={
    rol: 0,
    uid: '',
    email: '',
    userName: '',
    img: ''
  }
  aux:string=""
  constructor(private bookService:BookService,              
              private activatedRoute:ActivatedRoute,
              private userService:UserService) {
                this.activatedRoute.params.subscribe(({id})=> this.bookId=id)
                this.bookService.getBookById(this.bookId).subscribe(result =>{
                  this.book=result as Book      
                  this.book.eventId=this.bookId
                  this.active=this.book.active
                })
                var aux = JSON.parse(localStorage.getItem('userOnlinebook')!) as User ; 
                
                this.aux=aux.uid
                if(aux){
                  this.userService.getUserById(aux.uid).subscribe(result => {
                    this.admin=result as User
                 })
                }             
               
          
 
  }
  goPdf(){      
    this.bookService.getBookById(this.bookId).subscribe(result => {
      var aux= result as Book 
      window.location.href = aux.link!;
    }) 
  }
  activateBook(){  
    
    this.bookService.activateBook(this.bookId,this.aux,this.book )
  }
  
}
