import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Mecz } from './mecz';

@Injectable()
export class MeczService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private meczeUrl = 'api/mecze';  

  constructor(private http: Http) { }

  getMecze(): Promise<Mecz[]> {
    return this.http.get(this.meczeUrl)
               .toPromise()
               .then(response => response.json().data as Mecz[])
               .catch(this.handleError);
  }


  getMecz(id: number): Promise<Mecz> {
    const url = `${this.meczeUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Mecz)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.meczeUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create( team1: string ): Promise<Mecz> {
    return this.http
      .post(this.meczeUrl, JSON.stringify({ team1:team1 }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Mecz)
      .catch(this.handleError);
  }

  update(mecz: Mecz): Promise<Mecz> {
    const url = `${this.meczeUrl}/${mecz.id}`;
    return this.http
      .put(url, JSON.stringify(mecz), {headers: this.headers})
      .toPromise()
      .then(() => mecz)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}



