import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {BookInfo} from "../../../models/book-info.model";
import {Subscription} from "rxjs";
import {DataStorageService} from "../../../services/data-storage.service";

@Component({
  selector: 'app-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  displayedColumns: string[] = ['id', 'isbn', 'title', 'pageCount', 'actions'];
  dataSource = null;

  constructor(private libraryService: LibraryService,
              private dataStorageService: DataStorageService){
  }

  refreshFakedList() {
    this.dataStorageService.getBooksFromServer_Faked();
  }

  ngOnInit(): void {
    this.dataSource = this.libraryService.allTheBooks;
    this.subscription = this.libraryService.allTheBookListChanged.subscribe(
      (books: BookInfo[]) =>
        this.dataSource = this.libraryService.allTheBooks);
  }

  ngOnDestroy(): void {
      if (this.subscription){
        this.subscription.unsubscribe();
      }
  }

  clearList() {
    this.dataSource = [];
  }

  refreshListFromMongo() {
    this.dataStorageService.getBooksFromServer_Mongo();
  }
}
