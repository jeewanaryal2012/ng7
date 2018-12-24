import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get("http://localhost:3000/users");
    //return this._http.get("http://localhost:3000/emails");
  }
  postUsers(users): Observable<any> {
    console.log(users);
    return this._http.post("http://localhost:3000/users", users, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
    //return this._http.get("http://localhost:3000/emails");
  }

  errorHandler() {

  }
}
