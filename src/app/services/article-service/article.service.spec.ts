import { Article } from './../../models/article';
import { ARTICLES } from './../../models/mock-articles';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ArticleService } from './article.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService],
    });
    service = TestBed.inject(ArticleService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('makes expected call of getArticles', () => {
    service.getArticles().subscribe((res) => {
      expect(res).toEqual(ARTICLES);
    });
    const req = httpTestingController.expectOne(
      'http://localhost:8000/articles'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(ARTICLES);
  });

  it('makes expected call of getArticle', () => {
    service.getArticle('my-first-article').subscribe((res) => {
      expect(res).toEqual(ARTICLES[0]);
    });
    const req = httpTestingController.expectOne(
      'http://localhost:8000/articles/my-first-article'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(ARTICLES[0]);
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';
    httpClient.get<Article>('http://localhost:8000/404').subscribe(
      (data) => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne('http://localhost:8000/404');

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

  it('can test id undefined', () => {
    httpClient
      .get<Article>('http://localhost:8000/articles/no-article')
      .subscribe((d) => expect(d.id).toEqual(undefined, 'should have no data'));
    const requests = httpTestingController.match(
      'http://localhost:8000/articles/no-article'
    );
    expect(requests.length).toEqual(1);
    requests[0].flush([]);
  });
});
