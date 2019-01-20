import { Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../pages/home/home.component";
import { ContactComponent } from "../pages/contact/contact.component";
import { TestComponent } from "../component/test.component";
import { WeatherComponent } from "../pages/weather/weather.component";
import { MessagesComponent } from "../pages/messages/messages.component";
import { MessageDetailsComponent } from "../pages/messages/message-details/message-details.component";

import { UnauthorizeComponent } from "../pages/unauthorize/unauthorize.component";
import { ParentComponent } from "../core/component-interaction/parent/parent.component";

import { TableComponent } from "../pages/table/table.component";
import { AgTableComponent } from "../pages/ag-table/ag-table.component";

import { LoginComponent } from "../pages/login/login.component";
import { ListComponent } from "../pages/list/list.component";

import { AuthGuard } from '../guards/auth-guard.service';

export const appRoutes: Routes = [
  { path: "test", component: TestComponent },
  { path: "test/:id", component: TestComponent },
  { path: "home", component: HomeComponent },

  { path: "contact", component: ContactComponent },
  {
    path: "component-interaction",
    component: ParentComponent
  },
  { path: "weather", component: WeatherComponent },
  {
    path: "messages", component: MessagesComponent, children: [
      { path: 'detail/:id', component: MessageDetailsComponent },
    ]
  },
  {
    path: "table", component: TableComponent
  },
  {
    path: "ag-table", component: AgTableComponent
    //, canActivate: [AuthGuard]
  },
  {
    path: "list", component: ListComponent
  },
  {
    path: "unauthorize", component: UnauthorizeComponent
  },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
];
