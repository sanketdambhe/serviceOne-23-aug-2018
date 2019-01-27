import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModModule } from './mod/material-mod/material-mod.module';
import { DataEnterComponent } from './comp/data-enter/data-enter.component';
import { DataShowComponent } from './comp/data-show/data-show.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/dataService.service';

@NgModule({
  declarations: [
    AppComponent,
    DataEnterComponent,
    DataShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
