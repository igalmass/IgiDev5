import {Subject} from "rxjs/Subject";

export class SortService {
  constructor() {}

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent){
    //console.log("from SortService::ColumnSorted");
    this.columnSortedSource.next(event);
  }
}

export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;

}
