import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

import { LoginRegisterService } from "../../services/login-register.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  loginForm: FormGroup;
  submittedRegister = false;
  submittedLogin = false;

  constructor(private formBuilderRegister: FormBuilder, private formBuilderLogin: FormBuilder, private loginRegisterService: LoginRegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilderRegister.group({
      // Register
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      emailRegister: ["", Validators.required],
      passwordRegister: ["", Validators.required],
      passwordRegisterMatch: ["", Validators.required]
    });

    this.loginForm = this.formBuilderLogin.group({
      // Login
      emailLogin: ["", Validators.required],
      passwordLogin: ["", Validators.required]
    });
  }

  get fRegister() { return this.registerForm.controls; }
  get fLogin() { return this.loginForm.controls; }


  onSubmitRegister() {
    this.submittedRegister = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  onSubmitLogin() {
    console.log(this.submittedLogin);
    this.submittedLogin = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }

}
