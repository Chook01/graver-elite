import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'ge-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  staticPage: any;

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      //Get static page from route name
      this.apiService.getStatic(param['static_page']).subscribe(data => {
        this.staticPage = data;
      },

      //If static page json file does not exist redirect to error page
      error => {
        this.router.navigate(['404']);
      });
      
    });
  }

}
