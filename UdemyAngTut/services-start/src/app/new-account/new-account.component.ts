import { Component } from '@angular/core';
import { LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountsService: AccountsService, private loggingService: LoggingService){
    this.accountsService.serviceUpdated.subscribe((status: string) => alert("New status: " + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // const service = new LoggingService();
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);

    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
