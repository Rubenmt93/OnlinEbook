import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './book-page/book-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { BookPageButtonsComponent } from './components/book-page-buttons/book-page-buttons.component';



@NgModule({
  declarations: [
    BookPageComponent,
    BookInfoComponent,
    BookPageButtonsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class BookPageModule { }
