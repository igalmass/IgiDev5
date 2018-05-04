import {Component} from '@angular/core';
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public authService: AuthService, private dataStorageService: DataStorageService){

  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
        //console.log(response.type === HttpEventType.Sent);
    }, )
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
}
