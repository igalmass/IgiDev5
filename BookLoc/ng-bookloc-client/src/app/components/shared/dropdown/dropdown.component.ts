import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

export class DropdownValue{
  constructor(public value: string, public label: string){

  }
}

@Component({
  selector: 'app-dropdown',
  template:` 
    <ul>
        <li *ngFor="let value of values" (click)="select(value.value)">{{value.label}}</li> 
    </ul>
    
    `,
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  values:  DropdownValue[];

  @Input()
  value: string[];

  @Output()
  valueChange: EventEmitter<any>;

  constructor(private elementRef: ElementRef) {
    this.valueChange = new EventEmitter<any>();
  }

  select(value){
    this.valueChange.emit(value);
  }

  ngOnInit() {
  }

}
