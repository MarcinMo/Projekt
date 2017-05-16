import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Mecz }           from './mecz';

@Injectable()
export class MeczSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Mecz[]> {
    return this.http
               .get(`app/mecze/?name=${term}`)
               .map(response => response.json().data as Mecz[]);
  }
}


