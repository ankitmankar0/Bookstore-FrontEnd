import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;

  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem("token")
   }

   register(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/register', reqdata, false, header)
  }

  

  login(reqdata: any) {
    console.log(reqdata)
    let header = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService(`User/login/${reqdata.email}/${reqdata.password}`, reqdata, false, header)
  }
}
