import {Book} from "./book.model";

export class BookService{

  private allTheBooks : Book[] = [
    new Book(1, "Caribbean"),
    new Book(2, "The source")
  ];

  getAllTheBooks() {
    return this.allTheBooks.slice();
  }

}
