import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
   <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
`
})


export class AppComponent {
  
  title = 'System monitorowania wyników sportowych !';
  buttonAdd ='Dodaj'; 
  clicked(event){
    window.location.href = "/add";
  }
}









