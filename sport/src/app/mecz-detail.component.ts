import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Mecz }        from './mecz';
import { MeczService } from './mecz.service';

@Component({
  selector: 'mecz-detail',
  templateUrl: './mecz-detail.component.html',
  styleUrls: [ './mecz-detail.component.css' ]
})
export class MeczDetailComponent implements OnInit {
  mecz: Mecz;

  constructor(
    private meczService: MeczService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.meczService.getMecz(+params['id']))
      .subscribe(mecz => this.mecz = mecz);
  }

  save(): void {
    this.meczService.update(this.mecz)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

