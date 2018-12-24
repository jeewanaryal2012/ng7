import { Component, OnInit } from "@angular/core";
import { ShareService } from "../../services/share.service";

@Component({
  selector: "app-sib-two",
  templateUrl: "./sib-two.component.html",
  styleUrls: ["./sib-two.component.scss"]
})
export class SibTwoComponent implements OnInit {
  data: Array<string>;

  constructor(private _share: ShareService) {}

  ngOnInit() {}

  displayData() {
    this.data = this._share.getData();
  }
}
