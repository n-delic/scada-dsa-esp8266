import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, TuiButtonModule, TuiSvgModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TuiIslandModule} from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TuiGroupModule} from '@taiga-ui/core';

import { TuiAxesModule, TuiLineChartModule, TuiLineDaysChartModule } from "@taiga-ui/addon-charts";
import { GaugeModule } from "angular-gauge";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,
      TuiIslandModule,
      TuiGroupModule,
      TuiButtonModule,
      TuiSvgModule,
      TuiAxesModule,
      TuiLineChartModule,
      TuiLineDaysChartModule,
      GaugeModule.forRoot(),
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
