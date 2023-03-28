import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [

  {
    name:'The San Moritz Murders',
    author:'Robert M. Brunelle',
    image:'https://m.media-amazon.com/images/I/51FldsygAZL.jpg',
    amount:100


  },
  {
    name:'Dont Believe Everything You Think',
    author:'Joseph Nguyen',
    image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41cfieTWUVL._SX323_BO1,204,203,200_.jpg',
    amount:200

  },
  {
    name:'Atomic Habits',
    author:'James Clear',
    image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    amount:369
  }
    ]
  }
}
