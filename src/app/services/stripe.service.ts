import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http:HttpClient) { }

  makePayment(stripeToken: any, amount:number, user:User, bookName:string): Observable<any>{
    const url = "http://localhost:5000/checkout/"
    console.log(user);
    console.log(bookName)
    
    return this.http.post<any>(url,{token:stripeToken, amount:amount, rcptMail : user.email, description:bookName })
  }

  

  
}
