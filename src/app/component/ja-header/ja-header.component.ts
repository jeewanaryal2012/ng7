import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ja-header',
  templateUrl: './ja-header.component.html',
  styleUrls: ['./ja-header.component.scss']
})
export class JaHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() fontSize: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    const n = this._renderer.createElement("h2");
    const el = this._elementRef.nativeElement;

    console.log(this.title);
    this._renderer.setProperty(el, "innerHTML", this.title);
    this._renderer.setStyle(el, "color", this.color);
    this._renderer.setStyle(el, "font-size", this.fontSize);
    // this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '<h1>Contents here...</h1>');
  }

}
