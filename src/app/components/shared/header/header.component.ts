import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ge-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isScrolled: boolean = false;

  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 30 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  ngOnInit(): void {
  }

}
