/*import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  
  title = 'System monitorowania wyników sportowych !';
  buttonAdd ='Dodaj'; 
  clicked(event){
    window.location.href = "/mecz";
  }
}
*/

import { Component }          from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/widok" routerLinkActive="active">Widok</a>
      <a routerLink="/mecze" routerLinkActive="active">Mecze</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'System monitorowania wyników sportowych !';
}







