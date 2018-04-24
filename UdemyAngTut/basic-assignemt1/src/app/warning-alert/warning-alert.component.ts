import {Component} from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: '<p>This is a warning !</p>',
    styles: [`
    
      p {
        padding: 20px;
        background-color: rebeccapurple;
        border:  1px solid red;
      }
    
    `
    ]
  }
)
export class WarningAlertComponent {
  text = "this is the warning text";

}
