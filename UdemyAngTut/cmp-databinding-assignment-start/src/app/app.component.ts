import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allTheNumbers = [];

  onEverySecondEvent(eventDetails : {number: number}){
    console.log("from AppComponent - everySecondEvent: eventDetails = " + eventDetails.number);
    this.allTheNumbers.push(eventDetails.number);
  }
}
