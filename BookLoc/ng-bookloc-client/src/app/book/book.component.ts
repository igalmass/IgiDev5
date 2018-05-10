import { Component, OnInit } from '@angular/core';
import {BookService} from 'app/model/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  getAllTheBooks(){
    return this.bookService.getAllTheBooks();
  }

  ngOnInit() {

  }

}
