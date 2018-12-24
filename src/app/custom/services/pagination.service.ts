import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private _http: HttpClient) { }

  getPageData(): Observable<any> {
    return this._http.get("http://localhost:3000/pagination").pipe(map((d: Response) => {
      return d;
    }));
  }
}
