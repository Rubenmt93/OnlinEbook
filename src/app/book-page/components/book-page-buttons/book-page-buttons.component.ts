import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Relation } from 'src/app/interfaces/relation';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from '../../../services/book.service';
import { User } from 'src/app/interfaces/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-book-page-buttons',
  templateUrl: './book-page-buttons.component.html',
  styleUrls: ['./book-page-buttons.component.css']
})
export class BookPageButtonsComponent {
  acquired:boolean = false
  favorite:boolean = true
  user!:User
  bookId:string=""
  favId:string=""
  constructor(private bookService:BookService,
              private authService:AuthService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {                
      this.activatedRoute.params.subscribe(({id})=> {this.bookId=id})                  
      var aux=  localStorage.getItem('userOnlinebook');
      this.user= JSON.parse(aux!) as User            
      this.bookAcquired();
      this.checkFavorite();
      
  }
  
 
   
  bookAcquired(){
    this.bookService.getAcquiredBook(this.user.uid,this.bookId)
    .subscribe(result => {
      console.log('Tengo el libro',result);
      
      if(result.length==1){
        this.acquired=true
        console.log("TENGO EL PUTO LIBRO");
        
      }
    })
  }
  checkFavorite(){
    // this.bookService.getFavoriteBook(this.user.uid,this.bookId)
    // .subscribe(result => {
    //   // this.favId=result[0].eventId
    //   console.log("Favorite-->", result);
      
    //   if(result.length==1){        
    //     this.favorite=true
    //   }
    // })
    this.bookService.getFavoriteBook(this.user.uid,this.bookId)
    .subscribe(result => {
      console.log('fav',result);
      
      if(result.length==1){
        console.log("TENGO EL PUTO LIBRO EN FAV");
        
        this.favorite=false
      } 
    })
  }

  goPdf(){      
    this.bookService.getBookById(this.bookId).subscribe(result => {
      var aux= result as Book 
      window.location.href = aux.link!;
    }) 
  }
  buy(){    
    this.bookService.bougth(this.user.uid,this.bookId)
  }
  
  addFavorite(){
    this.bookService.addFavoriteBook(this.user.uid,this.bookId)
  }
  removeFavorite(){
    this.bookService.removeFavoriteBook(this.favId)
    
  }
  
  




  navigateLogin(){
    this.router.navigate(['/auth/login'])
  }
  

}
