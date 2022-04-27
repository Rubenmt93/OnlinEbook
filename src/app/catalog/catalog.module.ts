import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogHomeComponent } from './pages/catalog-home/catalog-home.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [    
    CatalogHomeComponent, BookcardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    BookcardComponent
  ]
})
export class CatalogModule { }
