import { Component, ViewChild } from '@angular/core';
import { CarrouselService } from '../../../services/carrousel.service';
import { CarrosuelItem } from '../../../interfaces/carrouselItem';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
})
export class CarrouselComponent {  
  images = [
    {path: ''},    
  ] 
  height:number=0
  constructor( private carrouselService:CarrouselService){
    this.carrouselService.getCarrouselItems().subscribe(result => {
      result.forEach( item =>{
        var aux= item as CarrosuelItem
        this.images.push({path: aux.path})            
      })
    })
    this.images.reverse().pop()   
    if(screen.width > 750){
      this.height= 400
    }else{
      this.height=200
    }
  }
}
  