import { Component, OnInit } from '@angular/core';
import { Book } from '../Interfaces/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  

books:Book[]=[];

constructor(private booksService:BooksService){}

ngOnInit(): void {
  this.books=this.booksService.getBooks();

}
  isDisabled:boolean=false;

  isShowing:boolean=true;


  
  
  // handleClick(){
  //   alert('I am Working...!');
  // }

  // myName:string='';
  // handleInput(event:any){
  //   this.myName=event.target.value;
  // }
}
