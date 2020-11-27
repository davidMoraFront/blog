import { ARTICLES } from './../../mocks/mock-articles';
import { Article } from './../../models/article';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    // return this.http.get<Article[]>();
    const articles: Article[] = ARTICLES;
    return of(articles);
  }

  getArticle(key: string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter((art) => art.key === key);
    return of(articles[0]);
  }
}
