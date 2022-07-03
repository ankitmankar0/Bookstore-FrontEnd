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
    return this.httpservice.postService('Feedback/Add', reqdata, true, headerOption);
  }

  getAllFeedback(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpservice.getService(`Feedback/Get/${data.bookId}`, false, header);
  }

  AddToCart(reqdata: any) {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Cart/AddBookToCart', reqdata, true, headerOption);
  }

  UpdateCart(reqdata: any) {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Cart/UpdateCart', reqdata, true, headerOption);
  }

  getCart() {

    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(headers);
    return this.httpservice.getService('Cart/GetAllBooksInCart', true, headers);
  }


  removeCart(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("reqdata")
    return this.httpservice.deleteServices(`Cart/Delete/${data.CartId}`, true, header)

  }


  getAllwishlist() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('WishList/GetAllBooksinWishList', true, header)
  }
  addwishlist(data: any) {
    console.log(data);
    this.token = localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    return this.httpservice.postService('WishList/addBooksInWishList', data, true, header);
  }
  removewishlist(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),

    };
    console.log("ganya", reqdata)
    return this.httpservice.deleteServices('WishList/DeleteBookinWishList', true, header);
  }
}
