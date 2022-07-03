import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist: any;
  BookId: any

  constructor(private book: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllwishlist();
  }

  getAllwishlist(){
    this.book.getAllwishlist().subscribe((response: any) => {
      console.log(response);
      this.wishlist = response.response;
      console.log(this.wishlist);

    });
  }

  removewishlist(wishlistId: any) {
    let reqdata = {
      wishListId: wishlistId
    }
    this.book.removewishlist(reqdata).subscribe((response: any) => {
      console.log(response);
      this.getAllwishlist();

    });
  }

}

