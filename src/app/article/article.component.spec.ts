import { ARTICLES } from './../models/mock-articles';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedService } from './../services/shared/shared.service';
import { ArticleService } from './../services/article-service/article.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title, By } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { ArticleComponent } from './article.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../models/article';

interface Art {
  id: number;
  title: string;
  key: string;
  date: Date;
  content: any;
  description: string;
  imageUrl: string;
}

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const sharedServiceStub = () => ({ blogTitle: {}, baseUrl: {} });
    const articleServiceStub = () => ({
      getArticle: (key: string) => ({ subscribe: (f) => f({}) }),
    });

    const activatedRouteStub = () => ({ params: { subscribe: (f) => f({}) } });
    const routerStub = () => ({ navigateByUrl: (string) => ({}) });
    const titleStub = () => ({ setTitle: (arg) => ({}) });
    const metaStub = () => ({ addTags: (array) => ({}) });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ArticleComponent],
      providers: [
        { provide: SharedService, useFactory: sharedServiceStub },
        { provide: ArticleService, useFactory: articleServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: Title, useFactory: titleStub },
        { provide: Meta, useFactory: metaStub },
      ],
    });
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes expected calls', () => {
    spyOn(component, 'getArticle').and.callThrough();
    component.ngOnInit();
    expect(component.getArticle).toHaveBeenCalled();
  });

  describe('HttpClient testing', () => {
    beforeEach(() => {
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
    });

    it('can test HttpClient.get for getArticle', () => {
      const testData: Article = ARTICLES[0];
      // Make an HTTP GET request
      httpClient
        .get<Article>('http://localhost:8000/my-first-article')
        .subscribe((data) =>
          // When observable resolves, result should match test data
          expect(data).toEqual(testData)
        );

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL `expectOne()` would throw.
      const req = httpTestingController.expectOne((request) =>
        request.url.includes('my-first-article')
      );

      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(testData);

      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
    });

    it('can test for 404 error', () => {
      const emsg = 'deliberate 404 error';

      httpClient
        .get<Article>('http://localhost:8000/my-first-article')
        .subscribe(
          (data) => fail('should have failed with the 404 error'),
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(emsg, 'message');
          }
        );

      const req = httpTestingController.expectOne(
        'http://localhost:8000/my-first-article'
      );

      // Respond with mock error
      req.flush(emsg, { status: 404, statusText: 'Not Found' });
    });

    it('can test multiple requests', () => {
      // Make three requests in a row
      httpClient
        .get<Article>('http://localhost:8000/no-article')
        .subscribe((d) =>
          expect(d.id).toEqual(undefined, 'should have no data')
        );

      // get all pending requests that match the given URL
      const requests = httpTestingController.match(
        'http://localhost:8000/no-article'
      );
      expect(requests.length).toEqual(1);

      // Respond to each request with different results
      requests[0].flush([]);
    });
  });
});
