import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { ReportService } from '../../../services/report.service';
import { Relation } from 'src/app/interfaces/relation';
import { Report } from 'src/app/interfaces/report';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-check-book-report',
  templateUrl: './check-book-report.component.html',
  styleUrls: ['./check-book-report.component.css']
})
export class CheckBookReportComponent  {
  items:Book[]=[]
  constructor(private reportService:ReportService,
              private bookService:BookService
              ) {
    this.reportService.getBookReports().forEach(report =>{
      this.items=[]
      var aux:Report[] = report as unknown as Report[]
      aux.forEach(element =>{ 
        this.bookService.getBookById(element.book!).subscribe(book =>{
          this.items.push( Object.assign(book as Book,{reason: element.reason, reportId: element.eventId}))
        })
      })        
    });   
  }  
  desestimar(id:string){
    this.reportService.removeReport(id)
  }

  async eliminar(id:string,idBook:string){
    await this.bookService.desactivateBook(idBook).then(result=>{
      this.reportService.removeReport(id)
    })    
  }  
}


