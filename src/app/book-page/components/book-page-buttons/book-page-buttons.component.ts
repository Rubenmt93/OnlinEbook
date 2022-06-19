import { Component, ElementRef, NgZone, ViewChild, AfterViewInit, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Relation } from 'src/app/interfaces/relation';
import { BookService } from '../../../services/book.service';
import { User } from 'src/app/interfaces/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPasswd } from 'src/app/auth/pages/login/login.component';
import { StripeService } from 'src/app/services/stripe.service';
import { BookInfoComponent } from '../book-info/book-info.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-book-page-buttons',
  templateUrl: './book-page-buttons.component.html',
  styleUrls: ['./book-page-buttons.component.css']
})
export class BookPageButtonsComponent  implements OnInit {
  acquired:boolean = false
  favorite:boolean = true
  slopes:boolean = true
  wanted:boolean = true
  user!:User
  bookId:string=""
  book!:Book
  favoriteRelation!:Relation[]
  slopesRelation!:Relation[]
  wantedRelation!:Relation[]
  

  paymentHandler: any = null;
  success: boolean = false  
  failure:boolean = false
  @ViewChild('cardInfo') cardInfo!: ElementRef;
  cardError!:string|null;
  card:any
  
  constructor(private bookService:BookService,              
              private activatedRoute:ActivatedRoute,
              private router:Router,
              public dialog: MatDialog,
              private stripeService:StripeService) {                
      this.activatedRoute.params.subscribe(({id})=> {this.bookId=id})     
      this.bookService.getBookById(this.bookId).subscribe(result =>{
        this.book=result as Book                
      })          
                   
      var aux=  localStorage.getItem('userOnlinebook');
      this.user= JSON.parse(aux!) as User            
      this.bookAcquired();
      this.checkFavorite();
      this.checkSlopes();
      this.checkWanted();
  }
 
  
  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L9pO7CRx1dyi6eWj6QNwZWGmnvJ9VU1rvzxSuseB9RUdC3ebLtiLWOpvcSAl8ly4xFPTVd7FwUz7cLTBmZ4oQDV002YjbtmYr',
      locale: 'es',
      token: function (stripeToken: any) {       
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      
      this.stripeService.makePayment(stripeToken,amount,this.user,this.book.name +" 1").subscribe((data: any) => {
          console.log(data);
             
        if (data.data === "success") {
          
          this.dialog.open(DialogStripe ,{data: "success"});
          //this.buy()
        }
        else {
         
          this.dialog.open(DialogStripe ,{data:  data.error,});
        }
      });
      this.stripeService.makePayment(stripeToken,amount,this.user,this.book.name +" 2").subscribe((data: any) => {
        console.log(data);
           
      if (data.data === "success") {
        
        this.dialog.open(DialogStripe ,{data: "success"});
        //this.buy()
      }
      else {
       
        this.dialog.open(DialogStripe ,{data:  data.error,});
      }
    });
    };
////////////////////////////////////////////////////////////
    paymentHandler.open({
      name: 'OnlinEbook',
      description: this.book.name,
      amount: this.book.price! * 100,
      currency: 'eur'
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L9pO7CRx1dyi6eWj6QNwZWGmnvJ9VU1rvzxSuseB9RUdC3ebLtiLWOpvcSAl8ly4xFPTVd7FwUz7cLTBmZ4oQDV002YjbtmYr',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
 

  
  
  buy(){    
    this.bookService.addAcquiredBook(this.user.uid,this.bookId)
    this.bookService.getWantedBook(this.user.uid,this.bookId).subscribe(wanted => {
      if(wanted[0]){
        var aux:Relation= wanted[0] as Relation
        this.bookService.removeWantedBook(aux.eventId!)
      } 
      
    })
  }
  bookAcquired(){
    this.bookService.getAcquiredBook(this.user.uid,this.bookId)
    .subscribe(result => {       
      
       
      if(result.length==1){
        this.acquired=true     
        
      }
    })
  }
  
  addSlopes(){
    this.bookService.addSlopesBook(this.user.uid,this.bookId)
  }
  checkSlopes(){
    this.bookService.getSlopesBook(this.user.uid,this.bookId)
    .subscribe(result => {
      this.slopesRelation = result as Relation[]               
      if(result.length>=1){     
        this.slopes=false
      } 
    })
  } 
  checkWanted(){
    this.bookService.getWantedBook(this.user.uid,this.bookId)
    .subscribe(result => {
      this.wantedRelation = result as Relation[]       
      if(result.length>=1){       
        this.wanted=false
      } 
    })
  } 
  
  checkFavorite(){    
    this.bookService.getFavoriteBook(this.user.uid,this.bookId)
    .subscribe(result => {
      this.favoriteRelation = result as Relation[]         
      if(result.length==1){       
        this.favorite=false
      } 
    })
  }
 
   
  addFavorite(){
    this.bookService.addFavoriteBook(this.user.uid,this.bookId)
  }
  
  
  removeFavorite(){
    this.bookService.removeFavoriteBook(this.favoriteRelation[0].eventId!).then(result=>{
      this.favorite= !this.favorite
    }) 
  }
    
  removeSlope(){
    this.bookService.removeSlopeBook(this.slopesRelation[0].eventId!).then(result=>{
      this.slopes= !this.slopes
    }) 
  }
  removeWanted(){
    this.bookService.removeWantedBook(this.wantedRelation[0].eventId!).then(result=>{
      this.wanted= !this.wanted
    }) 
  }

  addWanted(){
    this.bookService.addWantedBook(this.user.uid,this.bookId)
  }
  goPdf(){      
    this.bookService.getBookById(this.bookId).subscribe(result => {
      var aux= result as Book 
      window.location.href = aux.link!;
    }) 
  }

  navigateLogin(){
    this.router.navigate(['/auth/login'])
  }
  

}

@Component({
  selector: 'stripe-dialog',
  templateUrl: 'stripe-dialog.html',
  styleUrls: ['./book-page-buttons.component.css']
})
export class DialogStripe  {
  
  book!:Book
  constructor(public dialogRef: MatDialogRef<DialogPasswd>,              
              private bookService:BookService,
              @Inject(MAT_DIALOG_DATA) public data:any) {      
                console.log(data);
                                  
              }  
  closeDialog(){
    this.dialogRef.close();
  }
  
  
}