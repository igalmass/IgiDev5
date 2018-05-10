import {Author} from "./author.model";


export class Book {
  constructor(public id: number, public title: string, public description: string, public pageCount: number, public authors: Author[]){

  }

}
