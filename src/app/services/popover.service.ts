import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  tableData = [];

  constructor() { }

  setData(data) {
    this.tableData.push(data);
  }

  getData() {
    return this.tableData;
  }
}
