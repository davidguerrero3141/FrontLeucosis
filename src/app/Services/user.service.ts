import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registry_client (obj: any): Observable<any> {
    const url = 'http://localhost:8080/auth/create';
    return this.http.post<any>(
      url,
      obj,
      {
        observe: 'response'
      }
    )
  }

  login (email: String, contrasena: String): Observable<any> {
    const url = `http://localhost:8080/auth/create?email=${email}&contrasena=${contrasena}`;
    return this.http.get<any>(
      url,
      { observe: 'response' }
    )
  }

  getAllUser(): Observable<any>{
    const url = `http://localhost:8080/user/list`;
    return this.http.get<any[]>(url, {observe: 'response'})
  }
}
