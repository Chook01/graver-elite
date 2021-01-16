import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'ge-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    if(!this.apiService.offers){
      this.apiService.getData();
    }
  }

}
