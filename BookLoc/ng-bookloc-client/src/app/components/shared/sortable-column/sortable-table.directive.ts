import {Directive, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {SortService} from "./sort.service";
import {Subscription} from "rxjs/Subscription";

@Directive({
  selector: '[sortable-table]'
})
export class SortableTableDirective implements OnInit, OnDestroy{
  constructor(private sortService: SortService){

  }

  @Output()
  sorted = new EventEmitter();

  private columnSortedSubscription : Subscription;

  ngOnDestroy(): void {
    this.columnSortedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      //console.log('from columnSorted$');
      this.sorted.emit(event);
    });


  }

}
