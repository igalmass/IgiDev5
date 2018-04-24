import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Book} from '../book';

@Injectable()
export class BookService {
  private baseUrl:string = "http://localhost:8080/api";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private manipulatedBook = new Book();

  constructor(private _http: Http) { }

  getBooks(){
    console.log("getting books ...");
    return this._http.
           get(this.baseUrl + "/books", this.options).
           map((response:Response) => response.json()).
           catch(this.errorHandler);
  }

  getBook(id : Number){
    return this._http.
           get(this.baseUrl + '/book/' + id, this.options).
           map((response: Response) => response.json()).
           catch(this.errorHandler);
  }

  deleteBook(id: Number) {
    return this._http.
           delete(this.baseUrl + '/book/' + id, this.options).
           map((response: Response) => response.json()).
           catch(this.errorHandler);
  }

  createBook(book: Book){
    return this._http.post(this.baseUrl + "/book", JSON.stringify(book), this.options).
           map((response: Response) => response.json()).
           catch(this.errorHandler);
  }

  updateBook(book: Book){
    return this._http.
           put(this.baseUrl + "/book", JSON.stringify(book), this.options).
           map((response: Response) => response.json()).
           catch(this.errorHandler);
  }

  errorHandler(error: Response){
    return Observable.throw(error || "SERVER ERROR HAHAHA")  ;
  }

  setManipulatedBook(book : Book){
    this.manipulatedBook = book;
  }

  getManipulatedBook(){
    return this.manipulatedBook;
  }

}
