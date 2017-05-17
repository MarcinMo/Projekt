import { Component, OnInit } from '@angular/core';

import { Mecz }        from './mecz';
import { MeczService } from './mecz.service';

@Component({
  selector: 'my-widok',
  templateUrl: './widok.component.html',
  styleUrls: [ './widok.component.css' ]
})
export class WidokComponent implements OnInit {
  mecze: Mecz[] = [];

  constructor(private meczService: MeczService) { }

  ngOnInit(): void {
    this.meczService.getMecze()
      .then(mecze => this.mecze = mecze.slice(1, 5));
  }
}


