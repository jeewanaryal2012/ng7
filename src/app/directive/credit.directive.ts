import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[ccLogo]"
})
export class CreditDirective {
  constructor() {}
  @HostBinding("src")
  imageSource;

  @Input()
  cardNumber: string;
  // Lifecycle hook implemented here to update imageSource whenever     // the card number changes
  ngOnChanges() {
    //this.imageSource = ...;
  }
}
