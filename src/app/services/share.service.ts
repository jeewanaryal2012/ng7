import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShareService {
  d: Array<string> = [];

  emailObject = {};

  constructor() { }

  pushData(value) {
    this.d = [];
    this.d.push(value);
  }

  getData() {
    return this.d;
  }

  clearData() {
    this.d = [];
  }

  // EMAIL
  pushEmail(email) {
    this.emailObject = email;
  }
  popEmail() {
    return this.emailObject;
  }
}
