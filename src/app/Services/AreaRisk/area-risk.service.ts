import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaRiskService {

  constructor(private http: HttpClient) { }

  getAllAreasRisk(): Observable<any>{
    const url = `http://localhost:8080/areaRisk/allAreaRisk`;
    return this.http.get<any[]>(url, {observe: 'response'})
  }
}
