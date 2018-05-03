import { Component } from '@angular/core';
import {ServerService} from "./server.service";
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName().map((response: Response) => {
    return response.json()
  })

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService){

  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {
        //console.log(servers);
        this.servers = servers
      },
      (error) => console.log(error)
    )
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe
      ((response) => console.log(response),
      (error) => console.log(error))
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
