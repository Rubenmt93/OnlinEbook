import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ChargeService } from '../../../services/charge.service';
import { Charge } from '../../../interfaces/charge';
import { TotalCharge } from '../../../interfaces/totalcharge';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  list:TotalCharge[] = []
  constructor(private chargesServises: ChargeService,
              private messageService:MessagesService) { 
    this.fillList()
  }

  fillList(){
    this.chargesServises.getSoldBook().subscribe( result => {
      result.forEach(element => {                    
        var cont =0
        this.chargesServises.getChargesbybook(element.eventId).subscribe( charge =>{
          var aux:Charge[]= charge as Charge[] 
          
          if(aux[0]){
            aux.forEach( x  => {
              cont += x.amount
            })        
            
            this.list.push({ eventId: element.eventId, 
                             total: cont,  
                             userOwner:  aux[0].userOwner,
                             bookName: aux[0].bookName,                            
                             bookid: aux[0].book })
          }
         
        })             
      });
     })
  }
  payAuthor(item:TotalCharge){          
      
    this.chargesServises.payAuthor(item.bookid)
    var date =  new Date().toLocaleString()
    var msg="Se ha realizado el pago correspondiente a las ventas del libro " + item.bookName+ " hasta la fecha " + date
    this.messageService.addmessage("transmisor",item.userOwner,msg,"Pago realizado")    
    this.list =[]
    this.fillList()
  }  
}
