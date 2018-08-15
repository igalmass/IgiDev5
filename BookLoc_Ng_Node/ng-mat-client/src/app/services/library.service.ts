import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface BookInfo {
  isbn: string;
  title: string;
  pageCount: number
}
@Injectable({
  providedIn: 'root'
})


export class LibraryService {

  constructor(private httpClient: HttpClient) {
  }

  books: BookInfo[] = [
    {isbn: "12", title: 'The Three Musketeer', pageCount: 338},
    {isbn: "13", title: 'The Four Musketeer', pageCount: 415}
  ];

  getBooksFromServer(): BookInfo[] {
    return this.books;
  }

  readonly baseUrl = "http://localhost:3000/api";

  getBooksFromServer2(): Observable<BookInfo[]> {
    let url = this.baseUrl + "/books";
    return this.httpClient.get<BookInfo[]>(url);
    // pipe(map((response: Book[]) => {
    // console.log(response);
    // return response;}));
    // })).
    // subscribe(
    //   (response: Book[] ) => {
    //     this.libraryService.setAllBooks(response);
    //   },
    //   (error: string) => {
    //     console.log(error);
    //   }
    // )
  }
}
