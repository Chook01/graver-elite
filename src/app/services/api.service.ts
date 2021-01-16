import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  offers: any;

  public getData() {
    this.http.get('assets/offers.json').subscribe(data => {
      this.offers = data;
    });
  }

  public getStatic(name: string) {
    return this.http.get('assets/static/' + name + '.json');
  }

}
