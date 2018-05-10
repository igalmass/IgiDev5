import {Book} from "../model/book.model";
import {Author} from "../model/author.model";

export class LibraryService{
  authorMichner = new Author(1, "James A Michener");
  authorSanders = new Author(2, "Brandon Sanderson");
  authorTolkin = new Author(3, "J R R Tolkin");
  authorDeanKoontz = new Author(4, "Stephan King");

  private allTheBooks : Book[] = [
    new Book(1, "Caribbean", "A very nice carib book", 1041, [this.authorMichner, this.authorSanders]),
    new Book(2, "The source", "A very nice source book", 1052,[this.authorMichner]),
    new Book(3, "The Hobbit", "A very nice hobbit book", 203,[this.authorTolkin, this.authorDeanKoontz])
  ];

  getAllTheBooks() {
    return this.allTheBooks.slice();
  }

  getBookById(bookId: number) {
    const resultBook = this.allTheBooks.find(book => book.getId() === bookId);
    return resultBook;
  }

  getAllTheAuthors() {
    return [this.authorMichner, this.authorSanders, this.authorTolkin, this.authorDeanKoontz];
  }
}
