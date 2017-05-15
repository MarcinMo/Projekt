import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AddComponent } from './add.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
