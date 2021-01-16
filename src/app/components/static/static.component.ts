import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'ge-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  staticPage: any;

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      //Get static page from route name
      this.apiService.getStatic(param['static_page']).subscribe(data => {
        this.staticPage = data;
      });
    });
  }

}
