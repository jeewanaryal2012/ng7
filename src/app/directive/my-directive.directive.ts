import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[testDir]"
})
export class MyDirectiveDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "red";
  }

  @HostListener("click", ["$event"])
  handlClick(e) {
    this.el.nativeElement.style.color =
      this.el.nativeElement.style.color === "green" ? "red" : "green";
  }
}
