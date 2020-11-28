import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  title: string = `Whoops! The page you're looking for doesn't exist.`;
  linkText: string = 'Back to Articles';

  constructor() {}

  ngOnInit(): void {}
}
