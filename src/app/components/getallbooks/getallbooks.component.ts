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
      this.booksCount=res.response.length;
      console.log("BookData", this.booklist);
      console.log("booklist length",this.booksCount);
    }),
      (error: any) => {
        console.log(error);

      }
  }

  quickview(book:any){
    console.log("book id", book.bookId);
    
    localStorage.setItem('bookId', book.bookId);
    this.router.navigateByUrl('dashboard/quickview/' + book.bookId)

  }


  relevence(){  this.booklist = this.booklist.sort((x: any, y: any) => x.bookId - y.bookId);
    this.sortBy="Sort by relevence";
  }

  PriceLowToHigh(){
    this.booklist = this.booklist.sort((x: any, y: any) => x.discountPrice - y.discountPrice);
    this.sortBy="Price -- Low to High";
  }

  PriceHighToLow(){ 
    this.booklist = this.booklist.sort((x: any, y: any) => y.discountPrice - x.discountPrice);
    this.sortBy="Price -- High to low";
  }

  newestFirst(){
    this.booklist = this.booklist.sort((x: any, y: any) => y.bookId - x.bookId);
     this.sortBy="newest First";
  }
}
