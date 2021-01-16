import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ge-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  @Input() offer: any;

  isLoaded: boolean = false;

  ngOnInit(): void {
  }

}
