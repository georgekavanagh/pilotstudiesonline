import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }

  getExamsByUserId(id:string) {
    return this.http.get(`${environment.BASE_API_URL}/api/usermockexams/${id}`);
  }

  
}
