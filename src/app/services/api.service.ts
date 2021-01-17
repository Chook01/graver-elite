import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  offers: any;

  //Retrieves data for offers page (title, desc and image url)
  public getData() {
    this.http.get('assets/offers.json').subscribe(data => {
      this.offers = data;
    });
  }

  //Retrieves information for static page from json file
  public getStatic(name: string) {
    return this.http.get('assets/static/' + name + '.json');
  }

}
