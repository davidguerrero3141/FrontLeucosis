import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BovineService {

  constructor(private http: HttpClient) { }


  addBovine (obj: any): Observable<any> {
    const url = 'http://localhost:8080/bovine/addbovine';
    return this.http.post<any>(
      url,
      obj,
      {
        observe: 'response'
      }
    )
  }

  getAllBovines(): Observable<any>{
    const url = `http://localhost:8080/bovine/getallbovine`;
    return this.http.get<any[]>(url, {observe: 'response'})
  }

  addVetgerinaryRecordBovine(obj: any): Observable<any>{
    const url = `http://localhost:8080/veterinaryrecord/addrecord`;
    return this.http.post<any>(
      url,
      obj,
      {
        observe: 'response'
      }
    )
  }

  addInseminationBovine(obj: any): Observable<any>{
    const url = `http://localhost:8080/insemination/addInsemination`;
    return this.http.post<any>(
      url,
      obj,
      {
        observe: 'response'
      }
    )
  }
}
