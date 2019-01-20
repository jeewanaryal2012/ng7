import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ja-header',
  templateUrl: './ja-header.component.html',
  styleUrls: ['./ja-header.component.scss']
})
export class JaHeaderComponent implements OnInit, ICellRendererAngularComp {

  @Input() title: string;
  @Input() color: string;
  @Input() fontSize: string;
  @Output() valueChange = new EventEmitter();

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    /*
    const n = this._renderer.createElement("h2");
    const el = this._elementRef.nativeElement;

    console.log(this.title);
    this._renderer.setProperty(el, "innerHTML", this.title);
    this._renderer.setStyle(el, "color", this.color);
    this._renderer.setStyle(el, "font-size", this.fontSize);
    // this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '<h1>Contents here...</h1>');
    */
  }

  clicked(e, d) {
    console.log(d);
    this.valueChange.emit({
      data: "emitting data"
    });
  }

  public params: any = {
    //value: { top: 0.25, bottom: 0.75 }
  };

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  valueChanged() {
    this.valueChange.emit({
      data: "emitting data"
    });
  }

}
