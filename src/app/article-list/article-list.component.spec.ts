import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticleService } from './../services/article-service/article.service';
import { SharedService } from './../services/shared/shared.service';
import { Title } from '@angular/platform-browser';
import { ArticleListComponent } from './article-list.component';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(() => {
    const articleServiceStub = () => ({
      getArticles: () => ({ subscribe: (f) => f({}) }),
    });
    const sharedServiceStub = () => ({ blogTitle: {} });
    const titleStub = () => ({ setTitle: (arg) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ArticleListComponent],
      providers: [
        { provide: ArticleService, useFactory: articleServiceStub },
        { provide: SharedService, useFactory: sharedServiceStub },
        { provide: Title, useFactory: titleStub },
      ],
    });
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`articles has default value`, () => {
    expect(component.articles).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const titleStub: Title = fixture.debugElement.injector.get(Title);
      spyOn(component, 'getArticles').and.callThrough();
      spyOn(titleStub, 'setTitle').and.callThrough();
      component.ngOnInit();
      expect(component.getArticles).toHaveBeenCalled();
      expect(titleStub.setTitle).toHaveBeenCalled();
    });
  });

  describe('getArticles', () => {
    it('makes expected calls', () => {
      const articleServiceStub: ArticleService = fixture.debugElement.injector.get(
        ArticleService
      );
      spyOn(articleServiceStub, 'getArticles').and.callThrough();
      component.getArticles();
      expect(articleServiceStub.getArticles).toHaveBeenCalled();
    });
  });
});

/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

 */
