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
    this.searchAlgolia("",0)
    
          
  }
  searchForm: FormGroup = this.fb.group({
    busqueda: ["",[Validators.required] ],  
  })
  searchAlgolia(query:string,pag:number){
    
    const algoliasearch = require('algoliasearch')
    this.items=[]
    const client = algoliasearch('YOXBFV7TK8', '9a76d971acc4ab2225df7b67d5c598e9')
    const index = client.initIndex('OnlinEbook_post')
    const record = { objectID: 1, name: 'OnlinEbook_post' }
    index.search(query, {              
             
              "getRankingInfo": true,             
              "hitsPerPage": 10,                             
              "attributesToSnippet": "*:20",                 
              "page": pag,                
              "facets": ["*"],
              "numericFilters": [
                "active=1"
               ],
    }).then((_hits: any) =>{  
          
      this.items=_hits.hits as Book[]  
       
    }) 
  }  
  searchResult(){
    this.searchAlgolia(this.searchForm.controls['busqueda'].value,0)
  }
}
