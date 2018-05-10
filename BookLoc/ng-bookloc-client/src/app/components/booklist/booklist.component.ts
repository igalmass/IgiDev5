import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private bookService: BookService) { }

  getAllTheBooks(){
    debugger;
    return this.bookService.getAllTheBooks();
  }

  ngOnInit() {

  }

}
