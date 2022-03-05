import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './404-error/error404/error404.component';
import { CatalogHomeComponent } from './catalog/pages/catalog-home/catalog-home.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './landing-page/pages/home/home.component';
import { MylibraryHomeComponent } from './mylibrary/pages/mylibrary-home/mylibrary-home.component';
import { ProfileHomeComponent } from './profile/pages/profile-home/profile-home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  
  {
    path: 'catalog',
    component: CatalogHomeComponent
  },  
  {
    path: 'mylibrary',
    component: MylibraryHomeComponent,
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]

  },  
  {
    path: 'profile',
    component:ProfileHomeComponent,
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    component:Error404Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
