import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthModule } from '../auth/auth.module';
import { LoginActionComponent } from './components/login-action/login-action.component';
import { CatalogInfoComponent } from './components/catalog-info/catalog-info.component';
import { InfogramComponent } from './components/infogram/infogram.component';
import { WriterActionComponent } from './components/writer-action/writer-action.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    HomeComponent,
    LoginActionComponent,
    CatalogInfoComponent,
    InfogramComponent,
    WriterActionComponent,
    CarrouselComponent,
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AuthModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  exports:[
    HomeComponent
  ]
})
export class LandingPageModule { }
