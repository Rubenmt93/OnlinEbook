import { Component } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { CommentsService } from 'src/app/services/comments.service';
import { ReportService } from 'src/app/services/report.service';
import { MessagesService } from '../../../services/messages.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-check-comment-report',
  templateUrl: './check-comment-report.component.html',
  styleUrls: ['./check-comment-report.component.css']
})
export class CheckCommentReportComponent {
  user!:User
  items:Report[]=[]
  constructor(private commentService:CommentsService,
              private reportService:ReportService,
              private messageService:MessagesService) {
      this.reportService.getCommentsReports().subscribe(result=>{
        this.items=result as Report[]              
      })
      this.user = JSON.parse(localStorage.getItem('userOnlinebook')!) as User ; 
  }
  
  desestimar(id:string){
    this.reportService.removeReport(id)
  }

  eliminar(item:Report){
    this.commentService.removeComment(item.comment!)
    this.reportService.removeReport(item.eventId)
    this.messageService.addmessage(this.user.uid,item.user,"Su comentario '" + item.msg + "' ha sido eliminado","Comentario borrado")
  }
}
