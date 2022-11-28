import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-check-book',
  templateUrl: './check-book.component.html',
  styleUrls: ['./check-book.component.css']
})
export class CheckBookComponent {

  items:  any[]= []
  searchForm: FormGroup = this.fb.group({
    busqueda: ["",[Validators.required] ],  
  })
  constructor( private fb: FormBuilder, ) {
    this.searchAlgolia("",0)              
  }  
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
                "active=0"
               ],
    }).then((_hits: any) =>{            
      this.items=_hits.hits as Book[]         
    }) 
  }  
  searchResult(){
    this.searchAlgolia(this.searchForm.controls['busqueda'].value,0)
  }
}
