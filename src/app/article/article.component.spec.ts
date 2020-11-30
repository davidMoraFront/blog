import { ARTICLES } from './../models/mock-articles';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedService } from './../services/shared/shared.service';
import { ArticleService } from './../services/article-service/article.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { ArticleComponent } from './article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

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
});
