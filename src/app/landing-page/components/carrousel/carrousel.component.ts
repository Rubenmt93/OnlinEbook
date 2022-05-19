import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {  
  images = [
    {path: 'https://londongratis.com/wp-content/uploads/2016/08/Harry-potter-and-the-cursed-child.jpg'},   
    {path: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/148fc316-ee20-42ea-98bc-d9bd94d5660f.__CR0,0,970,600_PT0_SX970_V1___.jpg'},
    {path: 'https://www.smootharkano.com/wp-content/uploads/2016/11/arkano-plantilla.png'}
  ]
  height:number=0
  constructor(){
    if(screen.width > 750){
      this.height= 400
    }else{
      this.height=200
    }
  }
}
  