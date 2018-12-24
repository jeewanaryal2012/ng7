import { Component, OnInit } from "@angular/core";

import { ShareService } from "../../services/share.service";

@Component({
  selector: "app-sib-one",
  templateUrl: "./sib-one.component.html",
  styleUrls: ["./sib-one.component.scss"]
})
export class SibOneComponent implements OnInit {
  constructor(private _share: ShareService) { }

  ngOnInit() { }

  handleClickSib1(inp) {
    this._share.pushData(inp.value);
  }
  clearData() {
    this._share.clearData();
  }
}
