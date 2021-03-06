import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthModule } from './auth/auth.module';

import { LandingPageModule } from './landing-page/landing-page.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MylibraryModule } from './mylibrary/mylibrary.module';
import { CatalogModule } from './catalog/catalog.module';
import { Error404Module } from './404-error/404-error.module';
import { ProfileModule } from './profile/profile.module';
import { BookPageModule } from './book-page/book-page.module';
import { NgAisModule } from 'angular-instantsearch';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    LandingPageModule,
    AngularMaterialModule,
    MylibraryModule,
    ProfileModule,
    Error404Module, 
    CatalogModule,
    BookPageModule,
    AdminModule,
    NgAisModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
