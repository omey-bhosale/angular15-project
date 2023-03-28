import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../Interfaces/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{


  @Input() book:Book={} as Book;
 // @Output() bookEmiter=new EventEmitter<Book>();

isInCart:boolean=false;

  constructor(private cartService:CartService){}


  addToCart(){
    //alert(this.book);
    this.isInCart=true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }

}
