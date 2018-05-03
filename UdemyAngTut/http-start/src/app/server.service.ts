import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService{
  constructor(private http: Http){

  }

  storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.put('https://mytestproj-174013.firebaseio.com/data.json', servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://mytestproj-174013.firebaseio.com/data').map((response: Response) => {
      const data = response.json();
      for (let server of data){
        server.name = "FETCHED_" + server.name;
      }
      return data;
    }).catch((error: Response) => {
      console.log(error);
      return Observable.throw('Something went wrong')
    });
  }

  getAppName(){
    return this.http.get('https://console.firebase.google.com/project/mytestproj-174013/database/mytestproj-174013/data/appName.json');
  }
}
