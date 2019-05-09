import { Config } from './config';
import {HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'; // add map function to observable


@Injectable({
  providedIn: 'root'
})
export class TempReaderService {

  public getJsonData(): Observable<any> {
    return this.http.get("./assets/temp.json");
  }
  public getTextData(): Observable<any> {
    return this.http.get("./assets/temp.txt", { responseType: 'text' });
  }



  configUrl = 'assets/config.json';

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }


  constructor(private http: HttpClient) { }
}

export interface JSONa {
  barData: string;
  barLabel: string;
}
