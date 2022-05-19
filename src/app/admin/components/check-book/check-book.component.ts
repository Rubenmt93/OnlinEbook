import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-check-book',
  templateUrl: './check-book.component.html',
  styleUrls: ['./check-book.component.css']
})
export class CheckBookComponent {

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
