import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Mecz }                from './mecz';
import { MeczService }         from './mecz.service';

@Component({
  selector: 'my-mecze',
  templateUrl: './mecze.component.html',
  styleUrls: [ './mecze.component.css' ]
})
export class MeczeComponent implements OnInit {
  mecze: Mecz[];
  selectedMecz: Mecz;

  constructor(
    private meczeService: MeczService,
    private router: Router) { }

  getMecze(): void {
    this.meczService
        .getMecze()
        .then(mecze => this.mecze = mecze);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.meczService.create(name)
      .then(mecz => {
        this.mecze.push(mecz);
        this.selectedMecz = null;
      });
  }

  delete(mecz: Mecz): void {
    this.meczService
        .delete(mecz.id)
        .then(() => {
          this.mecze = this.mecze.filter(m => m !== mecz);
          if (this.selectedMecz === mecz) { this.selectedMecz = null; }
        });
  }

  ngOnInit(): void {
    this.getMecze();
  }

  onSelect(mecz: Mecz): void {
    this.selectedMecz = mecz;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMecz.id]);
  }
}


