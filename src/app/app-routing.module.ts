import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './404-error/error404/error404.component';
import { CatalogHomeComponent } from './catalog/pages/catalog-home/catalog-home.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './landing-page/pages/home/home.component';
import { MylibraryHomeComponent } from './mylibrary/pages/mylibrary-home/mylibrary-home.component';
import { ProfileHomeComponent } from './profile/pages/profile-home/profile-home.component';
import { InfoComponent } from './profile/components/info/info.component';
import { UpdateProfileComponent } from './profile/components/update-profile/update-profile.component';
import { ChangePasswdComponent } from './profile/components/change-passwd/change-passwd.component';
import { BookPageComponent } from './book-page/book-page/book-page.component';
import { MybooksComponent } from './mylibrary/components/mybooks/mybooks.component';
import { MyfavoritesComponent } from './mylibrary/components/myfavorites/myfavorites.component';
import { MyslopesComponent } from './mylibrary/components/myslopes/myslopes.component';
import { MypublishedbooksComponent } from './mylibrary/components/mypublishedbooks/mypublishedbooks.component';
import { MywantedComponent } from './mylibrary/components/mywanted/mywanted.component';
import { AddBookComponent } from './mylibrary/components/add-book/add-book.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CheckBookComponent } from './admin/components/check-book/check-book.component';
import { CheckCommentReportComponent } from './admin/components/check-comment-report/check-comment-report.component';
import { CheckBookReportComponent } from './admin/components/check-book-report/check-book-report.component';
import { MessagesComponent } from './profile/components/messages/messages.component';
import { CarrouselComponent } from './landing-page/components/carrousel/carrousel.component';
import { CarrouselAdminComponent } from './admin/components/carrousel-admin/carrousel-admin.component';
import { PaymentComponent } from './admin/components/payment/payment.component';


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
    path: 'book/:id',
    component: BookPageComponent
  },  
  {
    path: 'mylibrary',
    component: MylibraryHomeComponent,
    children:[
      {
        path:'myBooks',
        component:MybooksComponent,
      },
      {
        path:'myFavorites',
        component:MyfavoritesComponent,
      },
      {
        path:'mySlopes',
        component:MyslopesComponent,
      },
      {
        path:'myPublishedBooks',
        component:MypublishedbooksComponent,
      },
      {
        path:'myWantedBooks',
        component:MywantedComponent,
      },
      {
        path:'newBook',
        component:AddBookComponent,
      },
      {
        path: '**',
        component:MybooksComponent
      }

    ],
    canLoad:[AuthGuard],
    canActivate:[AuthGuard],

  },  
  {
    path: 'adminPanel',
    component: AdminHomeComponent,
    children:[
      {
        path:'checkBook',
        component:CheckBookComponent,
      },
      {
        path:'checkCommentReport',
        component:CheckCommentReportComponent,
      },
      {
        path:'checkBookReport',
        component:CheckBookReportComponent,
      },
      {
        path:'carrouselAdmin',
        component:CarrouselAdminComponent,

      }, 
      {
        path:'paymentAdmin',
        component:PaymentComponent,
        
      },
      
      {
        path: '**',
        component:CheckBookComponent
      }

    ],
    canLoad:[AdminGuard],
    canActivate:[AdminGuard],

  },  
  {
    path: 'profile',
    component:ProfileHomeComponent,
    children:[
      {
        path:'info',
        component:InfoComponent,
      },
      {
        path:'updateProfile',
        component:UpdateProfileComponent,
      },
      {
        path:'changePasswd',
        component:ChangePasswdComponent,
      },
      {
        path:'messagePage',
        component:MessagesComponent,
      }
    ],
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
