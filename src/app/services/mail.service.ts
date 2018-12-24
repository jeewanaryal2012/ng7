import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _http: HttpClient) { }

  loadEmails() {
    return this._http.get("http://localhost:3000/emails");
  }
}
