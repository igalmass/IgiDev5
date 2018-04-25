import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onEverySecondEvent = new EventEmitter<{number: number}>();
  theInterval = undefined;
  intervalCounter = 0;



  constructor() { }

  ngOnInit() {
  }

  // onInterval() {
  //   this.intervalCounter = this.intervalCounter + 1;
  //   console.log(this.intervalCounter);
  // };

  onStartGame() {
    this.theInterval = setInterval(
      //this.onInterval(),
      () => {
        this.intervalCounter = this.intervalCounter + 1;
        this.onEverySecondEvent.emit({number: this.intervalCounter });
        console.log(this.intervalCounter)
      },
      1000);
  }

  onStopGame() {
    clearInterval(this.theInterval);
    this.theInterval = undefined;
  }
}
