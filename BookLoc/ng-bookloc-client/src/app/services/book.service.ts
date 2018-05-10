import {Book} from "../model/book.model";
import {Author} from "../model/author.model";

export class BookService{

  michenerAuthor = new Author(1, "James A Michener");
  authorSanders = new Author(2, "Brandon Sanderson");
  authorTolkin = new Author(3, "J R R Tolkin");
  authorDeanKoontz = new Author(4, "Stephan King");

  private allTheBooks : Book[] = [
    new Book(1, "Caribbean", [this.michenerAuthor, this.authorSanders]),
    new Book(2, "The source", [this.michenerAuthor]),
    new Book(3, "The Hobbit", [this.authorTolkin, this.authorDeanKoontz])
  ];

  getAllTheBooks() {
    return this.allTheBooks.slice();
  }

}
