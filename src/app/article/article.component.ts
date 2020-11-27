import { SharedService } from './../shared.service';
import { ArticleService } from './../services/article-service/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const key = params.key;
      this.getArticle(key);
    });
  }

  getArticle(key: string) {
    this.articleService.getArticle(key).subscribe((article) => {
      if (article === undefined) {
        this.router.navigateByUrl('404');
        return;
      }
      this.article = article;
      this.titleService.setTitle(
        `${this.article.title} - ${this.sharedService.blogTitle}`
      );
    });
  }
}
