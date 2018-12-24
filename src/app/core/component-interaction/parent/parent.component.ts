import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  parentTextColor: string;
  parentWarningNumber: number;
  showTool: boolean;
  contentPosition: any;

  constructor() {
    this.parentTextColor = "#666666";
    this.showTool = false;
  }

  ngOnInit() {
    this.parentWarningNumber = 0;
  }

  onNotify(message): void {
    console.log(message);
  }

  openTooltip(e) {
    this.contentPosition = e;
    this.showTool = true;
  }
  closeTooltip(e) {
    this.showTool = false;
  }
}
