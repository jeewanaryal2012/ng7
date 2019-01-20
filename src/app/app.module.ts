import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCheckboxModule, MatGridListModule, MatTableModule,
  MatInputModule, MatFormFieldModule, MatPaginatorModule, MatSortModule,
  MatSnackBarModule, MatDialogModule, MatMenuModule, MatIconModule
} from "@angular/material";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomModule } from "./custom/custom.module";

import { appRoutes } from "./routes/route";

import { MyErrorDirective } from "./directive/error.directive";
import { TestComponent } from "./component/test.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CreditDirective } from "./directive/credit.directive";
import { MyDirectiveDirective } from "./directive/my-directive.directive";
import { MyComponentComponent } from "./component/my-component/my-component.component";
import { ParentComponent } from "./core/component-interaction/parent/parent.component";
import { ChildComponent } from "./core/component-interaction/child/child.component";
import { TooltipComponent } from "./component-interaction/tooltip/tooltip.component";
import { WeatherComponent } from "./pages/weather/weather.component";
import { SibOneComponent } from './component/sib-one/sib-one.component';
import { SibTwoComponent } from './component/sib-two/sib-two.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageDetailsComponent } from './pages/messages/message-details/message-details.component';
import { JaHeaderComponent } from './component/ja-header/ja-header.component';
import { TableComponent } from './pages/table/table.component';

import { HttpErrorInterceptor } from './error-handler/http-error.interceptor';

import { AgGridModule } from 'ag-grid-angular';
import { AgTableComponent } from './pages/ag-table/ag-table.component';
import { SnackBarComponent } from './component/snack-bar/snack-bar.component';
import { ErrorBoxComponent } from './component/error-box/error-box.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyErrorDirective,
    TestComponent,
    HomeComponent,
    ContactComponent,
    CreditDirective,
    MyDirectiveDirective,
    MyComponentComponent,
    ParentComponent,
    ChildComponent,
    TooltipComponent,
    WeatherComponent,
    SibOneComponent,
    SibTwoComponent,
    MessagesComponent,
    MessageDetailsComponent,
    JaHeaderComponent,
    TableComponent,
    AgTableComponent,
    SnackBarComponent,

    ErrorBoxComponent,

    UnauthorizeComponent,

    LoginComponent,

    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //DragDropModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {}),
    BrowserAnimationsModule,
    CustomModule,

    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,

    FormsModule,
    ReactiveFormsModule,

    AgGridModule.withComponents([])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent, ErrorBoxComponent, JaHeaderComponent]
})
export class AppModule { }
