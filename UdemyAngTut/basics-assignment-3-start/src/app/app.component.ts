import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDisplayText = false;
  log = [];

  onToggleDetails($event) {
    if (this.showDisplayText === true){
      this.showDisplayText = false;
    } else {
      this.showDisplayText = true;
    }
    this.log.push(new Date());

  }
}
