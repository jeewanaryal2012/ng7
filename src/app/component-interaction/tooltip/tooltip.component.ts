import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"]
})
export class TooltipComponent implements OnInit {
  @Input() content: string;
  @Input() ttColor: string;
  @Input() pos: any;

  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  ngOnInit() {
    //this._el.nativeElement.innerHTML = this.content;
    //this._el.nativeElement.style.border = "1px solid red";

    //this._el.nativeElement.style.marginBottom = this.pos.clientX - 20;
    //console.log(this.pos);

    this._renderer.setProperty(
      this._el.nativeElement,
      "innerHTML",
      this.content
    );
    this._renderer.setStyle(this._el.nativeElement, "color", this.ttColor);
    this._renderer.setStyle(this._el.nativeElement, "width", "200px");
    //this._renderer.setStyle(this._el.nativeElement, "position", "absolute");
    this._renderer.setStyle(
      this._el.nativeElement,
      "border",
      "2px solid #666666"
    );
    this._renderer.setStyle(this._el.nativeElement, "padding", "4px");
    this._renderer.setStyle(this._el.nativeElement, "font-size", "0.8rem");
    this._renderer.setStyle(
      this._el.nativeElement,
      "margin-left",
      this.pos.clientX + "px"
    );
  }
}
