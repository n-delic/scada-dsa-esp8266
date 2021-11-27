import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiButtonModule, TUI_SANITIZER, TuiHintModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiInputPasswordModule} from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { KucaComponent } from './components/kuca/kuca.component';
import { ControlsComponent } from './components/controls/controls.component';
import { NgxGaugeModule } from "ngx-gauge";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KucaComponent,
    ControlsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiIslandModule,
      TuiButtonModule,
      NgxGaugeModule,
      TuiHintModule,
      TuiInputPasswordModule,
      ReactiveFormsModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
