import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../interfaces/book';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent  {
  items:  Book[]= []
 
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
    const client = algoliasearch(environment.algolia.appId, environment.algolia.apiKey)
    const index = client.initIndex(environment.algolia.indexName)  
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
      console.log(_hits as Book);
      
      this.items=_hits.hits as Book[]  
       
    }) 
  }  
  searchResult(){
    this.searchAlgolia(this.searchForm.controls['busqueda'].value,0)
  }
}
