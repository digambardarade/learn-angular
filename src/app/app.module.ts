import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNgStyleComponent } from './shared/components/comp-ng-style/comp-ng-style.component';
import { CompNgClassComponent } from './shared/components/comp-ng-class/comp-ng-class.component';
import { CompNgIfComponent } from './shared/components/comp-ng-if/comp-ng-if.component';
import { ToDoListComponent } from './shared/components/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './shared/components/to-do-form/to-do-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNgStyleComponent,
    CompNgClassComponent,
    CompNgIfComponent,
    ToDoListComponent,
    ToDoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
