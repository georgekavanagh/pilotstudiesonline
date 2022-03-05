import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO,RegisterDTO } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  login(loginDTO:LoginDTO):Observable<any>{
    return this.httpClient.post(`${environment.BASE_API_URL}/api/account/login`,loginDTO);
  }

  register(registerDTO:RegisterDTO):Observable<any>{
    return this.httpClient.post(`${environment.BASE_API_URL}/api/account/register`,registerDTO);
  }

  getCurrentUser():Observable<any>{
    return this.httpClient.get(`${environment.BASE_API_URL}/api/account`);
  }

  getUserByEmail(email:string):Observable<any>{
    return this.httpClient.get(`${environment.BASE_API_URL}/api/account/${email}`);
  }

  
}
