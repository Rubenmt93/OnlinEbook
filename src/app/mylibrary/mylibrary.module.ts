import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylibraryHomeComponent } from './pages/mylibrary-home/mylibrary-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { MypublishedbooksComponent } from './components/mypublishedbooks/mypublishedbooks.component';
import { MyfavoritesComponent } from './components/myfavorites/myfavorites.component';
import { MyslopesComponent } from './components/myslopes/myslopes.component';

import { RouterModule } from '@angular/router';
import { CatalogModule } from '../catalog/catalog.module';
import { AppModule } from '../app.module';
import { MywantedComponent } from './components/mywanted/mywanted.component';

@NgModule({
  declarations: [
    MylibraryHomeComponent,
    MybooksComponent,
    MypublishedbooksComponent,
    MyfavoritesComponent,
    MyslopesComponent,
    MywantedComponent,
   
  ],
  imports: [
   
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    CatalogModule
  ]
})
export class MylibraryModule { }
