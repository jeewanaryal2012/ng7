import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "sample",
  templateUrl: "./test.component.html"
})
export class TestComponent implements AfterViewInit, OnInit {
  @ViewChild("tref", { read: ElementRef }) tref: ElementRef;
  @ViewChild("tref2", { read: ElementRef }) tref2: ElementRef;

  param: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit(): void {
    //console.log(this.tref.nativeElement.textContent);
    //console.log(this.tref2.nativeElement.textContent);
  }

  ngOnInit() {
    //this.activatedRoute.params.subscribe(params => console.log(params));
  }

  getParam() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.param = params.id;
    });
  }
}
