import {Component} from '@angular/core';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {

  constructor(private bookService: BookService){
     this.dataSource = this.bookService.books;
  }
  displayedColumns: string[] = ['isbn', 'title', 'pageCount'];
  dataSource = null;

}
