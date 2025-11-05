import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNgStyleComponent } from './shared/components/comp-ng-style/comp-ng-style.component';
import { CompNgClassComponent } from './shared/components/comp-ng-class/comp-ng-class.component';
import { CompNgIfComponent } from './shared/components/comp-ng-if/comp-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNgStyleComponent,
    CompNgClassComponent,
    CompNgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
