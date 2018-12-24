import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostListener
} from "@angular/core";

@Component({
  selector: "my-component",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.scss"]
})
export class MyComponentComponent implements OnInit {
  @Input("textColor") textColor: string;
  @HostListener("keydown", ["$event"])
  onMouseOver() {
    let inpWrapper = this.el.nativeElement.querySelector("#txtInp");
    if (inpWrapper.value <= 0) {
      inpWrapper.style.border = "4px solid red";
    }
  }
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "red";
  }

  ngOnInit() {
    console.log(this.el.nativeElement.querySelector("#wrapper"));
    let inpWrapper = this.el.nativeElement.querySelector("#txtInp");
    inpWrapper.style.color = "red";
  }
}
