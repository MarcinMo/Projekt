import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import 'rxjs/add/observable/of';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MeczSearchService } from './mecz-search.service';
import { Mecz } from './mecz';

@Component({
  selector: 'mecz-search',
  templateUrl: './mecz-search.component.html',
  styleUrls: [ './mecz-search.component.css' ],
  providers: [MeczSearchService]
})
export class MeczSearchComponent implements OnInit {
  mecze: Observable<Mecz[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private meczSearchService: MeczSearchService,
    private router: Router) {}


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.mecze = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(term => term   

        ? this.meczSearchService.search(term)

        : Observable.of<Mecz[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Mecz[]>([]);
      });
  }

  gotoDetail(mecz: Mecz): void {
    let link = ['/detail', mecz.id];
    this.router.navigate(link);
  }
}


