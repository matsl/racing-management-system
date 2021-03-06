import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AlertModule, DropdownModule, ModalModule, PaginationModule} from "ng2-bootstrap";

import {AppComponent} from "./app.component";
import {routes} from "./app.routes";
import {LoginModule} from "./login/login.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "./shared/shared.module";
import {ChartModule} from "angular2-highcharts";
import {Backend} from "./shared/backend";
import {Errors} from "./shared/errors";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ChartModule,
    LoginModule,
    DashboardModule,
    SharedModule.forRoot()
  ],
  providers: [Backend, Errors],
  bootstrap: [AppComponent]
})
export class AppModule {

}
