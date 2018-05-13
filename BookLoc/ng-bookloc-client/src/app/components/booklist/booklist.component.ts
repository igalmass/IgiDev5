import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataStorageService} from 'app/services/data-storage.service';
import {Book} from 'app/model/book.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  constructor(private libraryService: LibraryService,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  allTheBooks : Book[];
  subscription : Subscription;
  filterByTitleString = ''; // = 'the filter';
  options = [
    { label: 'title', value: 'title'},
    { label: 'description', value: 'description'},
    ];

  selectedFilterFieldName = "description";

  ngOnInit() {
    this.allTheBooks = this.libraryService.getAllTheBooks();
    this.subscription = this.
      libraryService.
        allTheBookListChanged.
        subscribe(
          (books: Book[]) => {
            this.allTheBooks = books;
    });

  }

  onEdit(bookId: number){
    this.router.navigate(['edit', bookId], {relativeTo: this.route});

  }

  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onFetchBooksFromServer() {
    this.dataStorageService.getBooksFromServer();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filterByTitleFunc(book : Book, titleFilter: string){
    const result = book.title.indexOf(titleFilter) != -1;
    return result;
  }


  oncClearFilterValue() {
    this.filterByTitleString = "";
  }

  onSorted($event: any) {
    // debugger;
    console.log('from booklist::onSoreted()');
    console.log("The event:");
    console.log($event);
  }
}
