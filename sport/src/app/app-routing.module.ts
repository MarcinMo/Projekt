import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WidokComponent }       from './widok.component';
import { MeczeComponent }       from './mecze.component';
import { MeczDetailComponent }  from './mecz-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/widok', pathMatch: 'full' },
  { path: 'widok',      component: WidokComponent },
  { path: 'detail/:id', component: MeczDetailComponent },
  { path: 'mecze',      component: MeczeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}