import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any;
  cartItemsCount: any;
  CartId:any;
  fullName:any;
  item_qty = 1;
  book:any
  bookQuantity:any;
  BookId:any;

  constructor(private bookService: BookService, private snackBar: MatSnackBar) { 

  }

  ngOnInit(): void {
    this.getallcart();
  }

  getallcart(){
    this.bookService.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartItems = response.response;
      console.log(this.cartItems);

    });
  }

  myRemoveCart(cartId:any){
    let data={
      CartId:cartId
    }
    console.log(cartId)
    this.bookService.removeCart(data).subscribe((response: any) => {
      this.getallcart()
      console.log('Remove successfully', response);
      this.snackBar.open('Remove successfully', '', {
        duration:2000,
       }); 

    })
  }

}
