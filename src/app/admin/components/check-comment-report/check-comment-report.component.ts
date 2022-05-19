import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { CommentsService } from 'src/app/services/comments.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-check-comment-report',
  templateUrl: './check-comment-report.component.html',
  styleUrls: ['./check-comment-report.component.css']
})
export class CheckCommentReportComponent {

  items:Report[]=[]
  constructor(private commentService:CommentsService,
              private reportService:ReportService) {
      this.reportService.getCommentsReports().subscribe(result=>{
        this.items=result as Report[]
        console.log(result as Report[]);
        
        
      })
  }
  getComment(commentId:string){
    this.commentService.getCommentById(commentId).subscribe(result => {
      console.log(result);
      
    })
  }
  desestimar(id:string){
    this.reportService.removeReport(id)
  }

  eliminar(id:string,idComment:string){
    this.commentService.removeComment(idComment)
    this.reportService.removeReport(id)

  }
}
