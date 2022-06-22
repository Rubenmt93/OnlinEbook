import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarrouselService } from '../../../services/carrousel.service';
import { CarrosuelItem } from '../../../interfaces/carrouselItem';


@Component({
  selector: 'app-carrousel-admin',
  templateUrl: './carrousel-admin.component.html',
  styleUrls: ['./carrousel-admin.component.css']
})
export class CarrouselAdminComponent  {
  imgUrl:any="../../../../assets/photo_placeholder.jpg"
  carrouselForm: FormGroup = this.fb.group({
    file: [this.imgUrl,Validators.required],
    name: ['',Validators.required],  
    
  })
  items!: CarrosuelItem[]
  constructor( private carrouselService:CarrouselService,
              private fb: FormBuilder,) { 
    this.carrouselService.getCarrouselItems().subscribe(result => {
      this.items=result as CarrosuelItem[]
      
    })

  }
  uploadFile(event: any) {     
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onloadend=() => {
      this.imgUrl=reader.result
    }
    
  }

 addItem(){
  const name=this.carrouselForm.controls['name'].value;
  this.carrouselService.addCarrouselItem(name,this.imgUrl)
   
 }

 deleteItem(id:string){
  this.carrouselService.deleteCarrouselItem(id)
 }
}
