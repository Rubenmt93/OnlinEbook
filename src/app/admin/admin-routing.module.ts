import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckCommentReportComponent } from './components/check-comment-report/check-comment-report.component';
import { CheckBookReportComponent } from './components/check-book-report/check-book-report.component';
import { CheckBookComponent } from './components/check-book/check-book.component';





const routes:Routes = [
  {
    path:'',
    children:[
      { 
        path:'checkBook',
        component:CheckBookComponent,
        outlet: 'outledAdmin'
      },
      {
        path:'checkCommentReport',
        component:CheckCommentReportComponent,
        outlet: 'outledAdmin'
      },
      {
        path:'checkBookReport',
        component:CheckBookReportComponent,
        outlet: 'outledAdmin'
      },
      {
        path:'**',
        redirectTo:'checkBook',
      }
      
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
