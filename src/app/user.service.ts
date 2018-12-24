import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsersInterface } from './interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers (): Observable<UsersInterface> {
    return this.http.get<UsersInterface>("https://jsonplaceholder.typicode.com/users");
  }
}
