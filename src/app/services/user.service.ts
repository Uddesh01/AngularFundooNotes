import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpService: HttpService ){ }
  loginCall(data:object)
  {
   return this.httpService.loginSiginUpCall("User/Login",data)
  }
}
