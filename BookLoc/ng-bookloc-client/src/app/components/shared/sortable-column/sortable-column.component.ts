import {Component, OnInit, Input, HostListener, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {SortService} from './sort.service';


// from: http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
@Component({
  selector: '[sortable-column]',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit , OnDestroy{

  constructor(private sortService : SortService) { }

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  private columnSortedSubscription: Subscription;



  @HostListener('click')
  sort(){
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    //console.log('from SortedColumnComponent - sort()');
    this.sortService.columnSorted( { sortColumn: this.columnName, sortDirection: this.sortDirection});
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
       //console.log('from SortedColumnComponent - got event:');
       //console.log(event);
      if (this.columnName != event.sortColumn){
        this.sortDirection = '';
      }
    })
  }

  ngOnDestroy(): void {
    this.columnSortedSubscription.unsubscribe();
  }

}
