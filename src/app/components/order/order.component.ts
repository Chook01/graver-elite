import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ge-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  orderName: string = 'proizvod';

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.orderName = param.order;
      if(this.orderName == 'undefined') { this.router.navigate(['404']); }
    });
  }

}
