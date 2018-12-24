import {
  Directive,
  ElementRef,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  Output,
  Input,
  EventEmitter,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[dir]"
})
export class MyErrorDirective implements OnInit {
  val: string;

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any> //private template: TemplateRef<any>
  ) {
    //el.nativeElement.style.background = "red";
    //el.nativeElement.style.color = "white";
    //console.log(container.element.nativeElement);
    //console.log(template.elementRef.nativeElement);
    // el.nativeElement.innerText = this.val;
    // el.nativeElement.style.color = "red";
  }
  @Input("dirCond")
  //   set appUnlessCond(condition: boolean) {
  //     //console.log(condition);
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   }
  @Input("dirFoo")
  @Output()
  onSelect: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  handleClick(e) {
    console.log(e);
  }

  ngOnInit(): void {
    //this.container.createEmbeddedView(this.template);
    this.onSelect.emit("we clicked");
  }
}
