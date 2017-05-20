import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }        from './app.component';
import { AppRoutingModule }    from './app-routing.module';

import { WidokComponent }       from './widok.component';
import { MeczeComponent }       from './mecze.component';
import { MeczDetailComponent }  from './mecz-detail.component';
import { MeczService }          from './mecz.service';
import { MeczSearchComponent }  from './mecz-search.component';



import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DaneService }  from './dane.service';


@NgModule({
  declarations: [
    AppComponent,
    WidokComponent,
    MeczDetailComponent,
    MeczeComponent,
    MeczSearchComponent        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DaneService)

  ],
  providers: [ MeczService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
