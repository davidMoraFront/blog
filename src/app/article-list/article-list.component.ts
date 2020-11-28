import { ArticleService } from './../services/article-service/article.service';
import { Article } from './../models/article';
import { Component, OnInit } from '@angular/core';
import { SharedService } from './../services/shared/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
  }

  getArticles() {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
