import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor(private http: HttpClient) { }

  getAllLands(): Observable<any>{
    const url = `http://localhost:8080/land/getall`;
    return this.http.get<any[]>(url, {observe: 'response'})
  }

  addLand(obj: any): Observable<any> {
    const url = 'localhost:8080/land/addland';
    return this.http.post<any>(
      url,
      obj,
      {
        observe: 'response'
      }
    )
  }
}
