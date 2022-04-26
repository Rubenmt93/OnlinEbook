import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylibraryHomeComponent } from './pages/mylibrary-home/mylibrary-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    MylibraryHomeComponent,
   
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class MylibraryModule { }
