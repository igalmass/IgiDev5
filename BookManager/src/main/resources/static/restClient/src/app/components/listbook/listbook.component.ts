import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared-service/book.service';
import {Book} from '../../book';
import {Router} from "@angular/router";



@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  private books: Book[];

  constructor(private _bookService :BookService, private _router: Router) {  }

  ngOnInit() {
    console.log("from init ...");
    this._bookService.getBooks().subscribe((books) => {
      console.log(books);
      this.books = books;
    }),
    (error) => {
      console.log(error);
    }
  }

  deleteBook(book){
    this._bookService.deleteBook(book.id).subscribe((data) => {
      this.books.splice(this.books.indexOf(book),1);
    }, (error) => {
      console.log(error);
    })
  }

  updateBook(book){
      console.log("updating book ...");
      console.log(book);
      this._bookService.setManipulatedBook(book);
      this._router.navigate(['/op']);
  }

  newBook(){
    let book = new Book();
    this._bookService.setManipulatedBook(book);
    this._router.navigate(['/op']);
  }

}
