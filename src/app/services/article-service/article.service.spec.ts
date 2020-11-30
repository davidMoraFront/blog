import { Article } from './../../models/article';
import { ARTICLES } from './../../models/mock-articles';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService],
    });
    service = TestBed.inject(ArticleService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('makes expected call of getArticles', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    service.getArticles().subscribe((res) => {
      expect(res).toEqual(ARTICLES);
    });
    const req = httpTestingController.expectOne(
      'http://localhost:8000/articles'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(ARTICLES);
    httpTestingController.verify();
  });

  it('makes expected call of getArticle', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    service.getArticle('my-first-article').subscribe((res) => {
      expect(res).toEqual(ARTICLES[0]);
    });
    const req = httpTestingController.expectOne(
      'http://localhost:8000/articles/my-first-article'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(ARTICLES[0]);
    httpTestingController.verify();
  });
});
