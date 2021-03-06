import {HttpClient} from "@angular/common/http";
import {LibraryService} from "./library.service";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {BookInfo} from "../models/book-info.model";

@Injectable()
export class DataStorageService{

  constructor(private httpClient: HttpClient, private libraryService: LibraryService){

  }

  readonly baseUrl = "http://localhost:3000/api";

  getBooksFromServer_Faked(){
    let url = this.baseUrl + "/books/faked";

    return this.httpClient.get<BookInfo[]>(url).
      pipe(map((response: BookInfo[]) => {
        console.log(response);
        return response;
      })).
      subscribe(
        (response: BookInfo[] ) => {
          this.libraryService.setAllBooks(response);
        },
        (error: string) => {
          console.log(error);
        }
      )
  }

  getBooksFromServer_Mongo(){
    let url = this.baseUrl + "/books";

    return this.httpClient.get<BookInfo[]>(url).
    pipe(map((response: BookInfo[]) => {
      console.log(response);
      return response;
    })).
    subscribe(
      (response: BookInfo[] ) => {
        this.libraryService.setAllBooks(response);
      },
      (error: string) => {
        console.log(error);
      }
    )
  }

  saveBook_Mongo(bookInfo: BookInfo) {
    let url = this.baseUrl + "/books";

    this.httpClient.post<BookInfo>(url, bookInfo).subscribe(
      (bookInfo: BookInfo) => {
        console.log("Succeeded to save. New Book: ");
        console.log(bookInfo);
      },
      (error: any) =>
      {
        console.log("Error: " + error)
      })
  }


}
