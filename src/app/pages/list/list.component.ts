import { Component, OnInit } from '@angular/core';
import { TableService } from "../../services/table.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList: any = [];
  selectedList: any = [];
  checkArray = [];

  constructor(private _tableService: TableService) { }

  ngOnInit() {
    this._tableService.getUsers().subscribe(res => {
      console.log(res);
      this.userList = res;
      this.userList = this.userList.sort(this.compare);
    });
  }

  checkChanged(e, val) {
    if (e.target.checked === true) {
      this.selectedList.push(val);
      this.selectedList = this.selectedList.sort(this.compare);
      // this.userList = this.userList.filter(function (value, index, arr) {
      //   return value.name !== val.name
      // });
    } else if (e.target.checked === false) {
      this.selectedList = this.selectedList.filter(function (value, index, arr) {
        return value.name !== val.name
      });
    }
  }
  remove(item) {
    this.checkArray = [];
    let remaining = this.selectedList.filter(function (value, index, arr) {
      //console.log(value);
      return value.name !== item.name
    });
    let removed = this.selectedList.filter(function (value, index, arr) {
      //console.log(value);
      return value.name === item.name;
    });
    remaining.sort(this.compare);
    //removed.sort(this.compare);

    this.selectedList = remaining;
    remaining.forEach(element => {
      this.checkArray.push(element.id);
    });
    console.log(this.checkArray);
    let tmp = this.userList.sort(this.compare);
    this.userList = [];
    setTimeout(() => {
      this.userList = tmp;
    }, 0);
    // this._tableService.getUsers().subscribe(res => {
    //   this.userList = res;
    //   this.userList = this.userList.sort(this.compare);
    //   console.log(this.checkArray);
    // });
    // this.userList = this.userList.sort(this.compare);
  }


  compare(a, b) {
    if (parseInt(a.id) < parseInt(b.id))
      return -1;
    if (parseInt(a.id) > parseInt(b.id))
      return 1;
    return 0;
  }

}
