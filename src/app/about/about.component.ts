import { Component, OnInit } from '@angular/core';
import { SharedService } from './../services/shared/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutTitle: string = 'About';
  aboutContent: string =
    'Lorem ipsum dólor sít amet, cu hís sáperet comprehénsam. Usu quas verterem no, mea unum dolores cu, ñec an libris épicurei reformídans. Omnesque assueverít éx vim. Té nihil cópiosae sapientem quo. Errem legimus pri ex, éx éum disséñtias temporibus.';

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      `${this.aboutTitle} - ${this.sharedService.blogTitle}`
    );
  }
}
