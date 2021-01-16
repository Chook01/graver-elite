import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  offers: any;

  public getData() {
    this.http.get('assets/database.json').subscribe(data => {
      this.offers = data;
    });
  }

}
