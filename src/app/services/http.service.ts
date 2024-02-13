import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  baseUrl: string = "https://localhost:7137/api/"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
  })

  constructor(public httpClient: HttpClient) { }
  loginSiginUpCall(endpoint: string, data: object): Observable<any> {
    return this.httpClient.post(this.baseUrl + endpoint, data)
  }

  registerUserCall(endpoint: string, data: object): Observable<any> {
    return this.httpClient.post(this.baseUrl + endpoint, data)
  }

  getAllNotes(endpoint:string):Observable<any>{
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    }) 
    return this.httpClient.get(this.baseUrl+endpoint,{
      headers:authHeader
    })
  }

  addNote(endpoint:string,data:object):Observable<any>{
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    })
    return this.httpClient.post(this.baseUrl+endpoint,data,{
      headers:authHeader
    })
  }

  archive(endpoint:string):Observable<any>{
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    })
    return this.httpClient.put(this.baseUrl+endpoint,{},{
      headers:authHeader
    })
  }

  trash(endpoint:string):Observable<any>{
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    })
    return this.httpClient.put(this.baseUrl+endpoint,{},{
      headers:authHeader
    })
  }

  delete(endpoint:string):Observable<any>{
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    })
    return this.httpClient.delete(this.baseUrl+endpoint,{
      headers:authHeader
    })
  }

  colorCall(endpoint:string):Observable<any>{
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    })
    return this.httpClient.put(this.baseUrl+endpoint,{},{
      headers:authHeader
    })
  }
  editNote(endpoint: string, data: object): Observable<any> {
    const authHeader = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
    });
  
    return this.httpClient.put(this.baseUrl + endpoint, data, {
      headers: authHeader
    });
  }
  
}
