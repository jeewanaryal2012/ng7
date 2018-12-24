import { Component, OnInit } from '@angular/core';

import { PaginationService } from "./services/pagination.service";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  pageItems: [];
  slicedItems: [];
  totalPage: number;
  itemPerPage = 4;
  currentPage = 0;
  hidePrev = true;
  hideNext = true;

  constructor(private _paginationService: PaginationService) { }

  ngOnInit() {
    this.getData(this.currentPage, "none");
  }

  next() {
    this.getData(this.currentPage, "next");
  }

  prev() {
    this.getData(this.currentPage, "prev");
  }

  getData(currentPage, btnType) {
    this._paginationService.getPageData().subscribe((d) => {
      if (currentPage === 0 && btnType === "none") {
      }
      else {
        if (btnType === "next") {
          this.currentPage == (this.currentPage >= (<any>d).length ? this.currentPage : this.currentPage++);
        } else if (btnType === "prev") {
          this.currentPage == (this.currentPage === 0 ? this.currentPage : this.currentPage--);
        }
      }

      this.trucateObject(this.currentPage, d);
    });
  }

  trucateObject(cp, d) {
    let l = cp * 4;
    this.pageItems = <any>d;
    let tmp = [];
    for (let i = l; i < l + 4; i++) {
      if (i < d.length - 1) {
        tmp.push(d[i]);
        this.hideNext = true;
      } else {
        this.hideNext = false;
      }
    }

    this.pageItems = <any>tmp;

    console.log(tmp);
  }

}
