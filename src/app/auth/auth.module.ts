import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { LoginComponent,DialogPasswd } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyemailComponent,
    DialogPasswd
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
