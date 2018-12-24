import {
  Component,
  OnInit,
  Input,
  Output,
  ElementRef,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  @Input() childTextColor: string;
  @Input() childWarningNumber: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _el: ElementRef) {
    this._el.nativeElement.style.border = "10px solid " + this.childTextColor;
  }

  ngOnInit() {}

  handleChildButton(e) {
    //console.log(e);
    this.notify.emit(e);
  }
}
