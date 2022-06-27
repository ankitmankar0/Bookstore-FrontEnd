import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  booklist: any;
  booksCount: any;
  sortBy:any="Sort by relevence";


  constructor(private book: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getallbooks()
  }

  getallbooks() {
    this.book.getallbooks().subscribe((res: any) => {
      console.log(res);
      this.booklist = res.response;
      console.log("BookData", this.booklist);
    }),
      (error: any) => {
        console.log(error);

      }
  }


  relevence(){  
  }

  PriceLowToHigh(){
  }

  PriceHighToLow(){ 
  }

  newestFirst(){
  }
}
