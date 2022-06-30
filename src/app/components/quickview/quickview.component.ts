import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  cartQuantity: number = 0;
  showButton: boolean = false;
  showBag: boolean = true;
  BookId: any;
  bookInfo: any;
  feedback: any;
  value: any;
  feedbackList: any;
  comment: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //this.quickView();
    this.getBookDetail();
    this.BookId = localStorage.getItem('bookId')

  }

  getBookDetail(){
    this.bookService.getallbooks().subscribe((res:any)=>{ 
      res.response.forEach((element:any) => {
        if(element.bookId == this.BookId){
          this.bookInfo = element;
          console.log("boofInfo", this.bookInfo);
          this.getAllFeedback();
        }  
      });
    }, error=>{
      console.log(error); 
    })
  }


  addFeedback() { 
    let reqdata = {
      rating: this.value,
      comment: this.comment,
      bookId: this.bookInfo.BookId
    }
    this.bookService.AddFeddback(reqdata).subscribe((response:any)=>{
      console.log("Feedback submitted successful", response);
      this.getAllFeedback();
    })
  }

  getAllFeedback(){
    console.log(this.BookId)
    this.bookService.getAllFeedback(this.BookId).subscribe((res:any)=>{
      console.log("get feedback list",res);
      this.feedbackList = res.response;
      console.log(this.feedbackList);
    })
  }

  addToWishlist() { }
  plus() { }
  minus() { }
  addToBag() { }
  addToCart() { }
}
