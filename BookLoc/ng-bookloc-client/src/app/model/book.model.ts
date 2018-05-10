import {Author} from "./author.model";


export class Book {
  constructor(private id: number, private title: string, private description: string, private pageCount: number, private authors: Author[]){

  }

  public getId(){
    return this.id;
  }

  public getTitle(){
    return this.title;
  }

  public getDescription(){
    return this.description;
  }

  public getPageCount(){
    return this.pageCount;
  }

  public getAuthors(){
    return this.authors;
  }

  public setTitle(newTitle: string){
    this.title = newTitle;
  }

  public setDescription(newDescription : string){
    this.description = newDescription;
  }

  public setPageCount(newPageCount: number){
    this.pageCount = newPageCount;
  }
}
