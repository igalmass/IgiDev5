import {Author} from "./author.model";


export class Book {
  constructor(private id: number, private title: string, private details: string, private pageCount: number, private authors: Author[]){

  }

  public getId(){
    return this.id;
  }
}
