import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { MyfavoritesComponent } from './components/myfavorites/myfavorites.component';
import { MyslopesComponent } from './components/myslopes/myslopes.component';
import { MypublishedbooksComponent } from './components/mypublishedbooks/mypublishedbooks.component';
import { MywantedComponent } from './components/mywanted/mywanted.component';
import { AddBookComponent } from './components/add-book/add-book.component';





const routes:Routes = [
  {
    path:'',
    children:[
      { 
        path:'myBooks',
        component:MybooksComponent,
        outlet: 'outledMybooks'
      },
      {
        path:'myFavorites',
        component:MyfavoritesComponent,
        outlet: 'outledMybooks'
      },
      {
        path:'mySlopes',
        component:MyslopesComponent,
        outlet: 'outledMybooks'
      },
      {
        path:'myPublishedBooks',
        component:MypublishedbooksComponent,
        outlet: 'outledMybooks'
      },
      {
        path:'myWantedBooks',
        component:MywantedComponent,
        outlet: 'outledMybooks'
      },
      {
        path:'newBooks',
        component:AddBookComponent,
        outlet: 'outledMybooks'
      },
      
    ]
  }
]
@NgModule({
  
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class MilibraryRoutingModule { }
