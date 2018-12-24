import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';

import { MatButtonModule, MatCheckboxModule, MatGridListModule } from "@angular/material";

@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [CustomComponent]
})
export class CustomModule { }
