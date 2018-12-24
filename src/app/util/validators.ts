
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

export class Util {
    static validatePhone(control: AbstractControl): { [key: string]: string } {
        console.log(control);
        let phoneNumber = parseInt(control.value);
        if (phoneNumber < 1000000000 || phoneNumber > 9999999999 || isNaN(phoneNumber)) {
            return {
                error: "Phone number must be 10 digit"
            };
        } else {
            return null;
        }
    }
}