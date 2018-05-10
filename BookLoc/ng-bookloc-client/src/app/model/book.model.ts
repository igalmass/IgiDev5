import {Author} from "./author.model";


export class Book {
  constructor(private id: number, private title: string, private authors: Author[]){

  }
}
