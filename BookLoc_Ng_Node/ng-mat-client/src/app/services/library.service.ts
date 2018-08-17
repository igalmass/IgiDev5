import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {BookInfo} from "../models/book-info.model";


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class LibraryService {
  public allTheBookListChanged = new Subject<BookInfo[]>();

  constructor(private httpClient: HttpClient) {
  }

  allTheBooks: BookInfo[] = [
    {id: '1', isbn: "12", title: 'The Three Musketeer', pageCount: 338},
    {id: '2', isbn: "13", title: 'The Four Musketeer', pageCount: 415}
  ];

  setAllBooks(books: BookInfo[]) {
    this.allTheBooks = books;
    this.allTheBookListChanged.next(this.allTheBooks.slice());
  }
}
