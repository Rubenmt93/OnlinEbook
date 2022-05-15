import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../interfaces/book';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent  {
  items:  any[]= []
 
  constructor( private bookService:BookService,
              private fb: FormBuilder, ) {
    this.bookService.motodo().subscribe(result =>{           
      this.items=result         
      })        
}
searchForm: FormGroup = this.fb.group({
  busqueda: ["",[Validators.required] ],
  categoria: ["",[Validators.required] ]
})
categoriasList: string[] = ['Terror', 'Fantasia','Educativo','Peosia','Drama','Infantil','Romantica','Futurista','Otro']; 

  
search(){
  console.log('dwd');
  
}
  
  
}
