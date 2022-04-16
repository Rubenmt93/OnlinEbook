import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../interfaces/book';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent  {
  items:  any[]= []
 
  constructor( private bookService:BookService) {
    this.bookService.motodo().subscribe(result =>{      
     
      this.items=result         
      })
         
    
    
  }
   
  

  
  
}
