import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CheckBookComponent } from './components/check-book/check-book.component';
import { CheckBookReportComponent } from './components/check-book-report/check-book-report.component';
import { CheckCommentReportComponent } from './components/check-comment-report/check-comment-report.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { CatalogModule } from '../catalog/catalog.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrouselAdminComponent } from './components/carrousel-admin/carrousel-admin.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    CheckBookComponent,
    CheckBookReportComponent,
    CheckCommentReportComponent,
    CarrouselAdminComponent,
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    CatalogModule,
    ReactiveFormsModule,
    CatalogModule
  ]
})
export class AdminModule { }
