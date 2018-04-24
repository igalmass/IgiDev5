import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import {Router} from '@angular/router';
import { BookService } from '../../shared-service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  private book : Book;

  constructor(private _bookService : BookService, private _router : Router ) { }

  ngOnInit() {
    this.book = this._bookService.getManipulatedBook();
    console.log("From form: manipulated book is:");
    console.log(this.book);
  }

  processForm(){
    console.log("processing book:");
    console.log(this.book);
    if (this.book.id == undefined){
      console.log("creating a new book !!!");
      this._bookService.createBook(this.book).subscribe((book)=> {
        console.log(book);
        this._router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      
       this._bookService.updateBook(this.book).subscribe((book) => {
         console.log(book);
         this._router.navigate(['/']);
       }, (error) => {
         console.log(error);
       });
    }
    
  }



}
