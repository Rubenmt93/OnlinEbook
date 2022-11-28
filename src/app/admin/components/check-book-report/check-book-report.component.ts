import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { ReportService } from '../../../services/report.service';
import { Relation } from 'src/app/interfaces/relation';
import { Report } from 'src/app/interfaces/report';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/interfaces/book';
import { MessagesService } from '../../../services/messages.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-check-book-report',
  templateUrl: './check-book-report.component.html',
  styleUrls: ['./check-book-report.component.css']
})
export class CheckBookReportComponent  {
  items:Book[]=[]
  admin!: User;
  constructor(private reportService:ReportService,
              private bookService:BookService,
              private messageService:MessagesService
              ) {
    this.fillList()
    this.admin = JSON.parse(localStorage.getItem('userOnlinebook')!) as User ; 
  }  
  fillList(){
    this.items=[]
    this.reportService.getBookReports().forEach(report =>{
     
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
    this.fillList()        
  }

   eliminar(item:Book){     
    var msg="Su libro " + item.name + " ha sido eliminado del catalogo"  
    this.messageService.addmessage(this.admin.uid,item.userOwner!,msg,"Libro eliminado")
    this.reportService.removeReport( item.reportId! )  
    this.bookService.desactivateBook(item.eventId)     
   
  }  
}


