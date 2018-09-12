import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { KoreaAll } from './app-class';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // http://myjson.com 에서 Json data 가져옴.
  // private API_URL = 'https://api.myjson.com/bins/hfvq8';
  private API_URL = 'https://api.myjson.com/bins/xj8zc';

  getKorea(): Observable<KoreaAll[]> {
    return this.http.get<KoreaAll[]>(this.API_URL);
  }

  constructor(private http: HttpClient) { }

}
