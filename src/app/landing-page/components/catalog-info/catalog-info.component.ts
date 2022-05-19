import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-info',
  templateUrl: './catalog-info.component.html',
  styleUrls: ['./catalog-info.component.css']
})
export class CatalogInfoComponent  {
  width:number=0
  heigth:number=0
  constructor() {
    if(screen.width > 750){
      this.width = screen.width * 0.50
      this.heigth = screen.height * 0.5
    }else{
      this.width = screen.width * 0.6
      this.heigth = screen.height * 0.5
    }    
  }  
}
