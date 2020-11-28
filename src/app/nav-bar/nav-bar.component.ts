import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  articlesLink: string = 'Articles';
  aboutLink: string = 'About';

  constructor() {}

  ngOnInit(): void {}
}
