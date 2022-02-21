import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing-page/pages/home/home.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },  
  {
    path: '**',
    component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
