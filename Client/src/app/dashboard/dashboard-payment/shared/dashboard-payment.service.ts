import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardPaymentService {
  private http:HttpClient

  constructor(private handler:HttpBackend) {
      this.http = new HttpClient(handler);
   }

  getUniqueIdentifyer(paramString) {
    const headers = new HttpHeaders()
      .set('Content-type','application/x-www-form-urlencoded')
    return this.http.post(`https://www.payfast.co.za/onsite/process`, paramString, {headers});
  }

  

  
}
