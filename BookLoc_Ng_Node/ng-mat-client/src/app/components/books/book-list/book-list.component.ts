import {Component} from '@angular/core';
import {LibraryService} from "../../../services/library.service";

@Component({
  selector: 'app-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {

  constructor(private libraryService: LibraryService){
     this.dataSource = this.libraryService.books;
  }
  displayedColumns: string[] = ['isbn', 'title', 'pageCount'];
  dataSource = null;

  refreshList() {
    this.dataSource = this.libraryService.getBooksFromServer();
  }
}
