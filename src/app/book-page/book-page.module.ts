import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './book-page/book-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    BookPageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class BookPageModule { }
