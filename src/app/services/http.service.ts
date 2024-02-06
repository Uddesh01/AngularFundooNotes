import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://localhost:7137/api/"
  constructor(public httpClient: HttpClient) { }
  loginSiginUpCall(endpoint: string, data: object): Observable<any> {
    return this.httpClient.post(this.baseUrl + endpoint, data)
  }
  registerUserCall(endpoint: string, data: object): Observable<any> {
    return this.httpClient.post(this.baseUrl + endpoint, data)
  }
}
