import {HttpClient, HttpEvent} from "@angular/common/http";
import {catchError, map} from 'rxjs/operators';
import {LibraryService} from "./library.service";
import {Injectable} from "@angular/core";
import {Book} from "../model/book.model";


@Injectable()
export class DataStorageService{
  constructor(private httpClient: HttpClient, private libraryService: LibraryService){

  }

  readonly baseUrl = "http://localhost:8080/api";

  getBooksFromServer(){
    let url = this.baseUrl + "/books";

    return this.httpClient.get<Book[]>(url).
      pipe(map((response: Book[]) => {
        console.log(response);
        return response;
    })).
    subscribe(
      (response: Book[] ) => {
        this.libraryService.setAllBooks(response);
      },
      (error: string) => {
        console.log(error);
      }
      )
  }

  saveBook(book : Book){
    let url = this.baseUrl + "/book";

    let a = this.httpClient.put<Book>(url, book).subscribe(
      (response: any) =>
      {
        debugger;
        console.log(response);
      },
        (error: any)=>
        {
          console.log("Got error:")
          console.log(error);
        },
      () => console.log('completed')
    )



  }

  createBook(book: Book){
    let url = this.baseUrl + "/book";

    this.httpClient.post<Book>(url, book).subscribe(
      (responseBook: Book) => {
        console.log("create book succeeded")
        console.log(responseBook);
        this.libraryService.addBook(responseBook);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
