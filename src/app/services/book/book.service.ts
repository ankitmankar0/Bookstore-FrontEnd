import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }

  getallbooks() {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Book/GetAllBooks', true, headerOption);
  }


  AddFeddback(reqdata: any) {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Feedback/Add/', reqdata, true, headerOption);
  }

  getBookById(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    }; 
    return this.httpservice.getService( `Book/GetBook?BookId=${reqdata.BookId}`, true,header );
    
  }

  getAllFeedback(BookId:any){
    console.log(BookId);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpservice.getService(`Feedback/Get/${BookId}`, false, header);
  }
}
