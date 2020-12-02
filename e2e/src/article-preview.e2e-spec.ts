import { ARTICLES } from './../../src/app/models/mock-articles';
import { Article } from './../../src/app/models/article';
import { ArticlePreviewPage } from './article-preview.po';
import { browser } from 'protractor';

describe(`<${ArticlePreviewPage.HtmlTagComponent}>`, () => {
  let page: ArticlePreviewPage;
  let article: Article = ARTICLES[0];

  beforeEach(() => {
    page = new ArticlePreviewPage();
    page.navigateToArticles();
  });

  it(`should display image`, () => {
    expect(page.getArticleImg()).toEqual(article.imageUrl);
  });

  it(`should display title`, () => {
    expect(page.getArticleTitle()).toEqual(article.title);
  });

  it(`should display date`, () => {
    expect(page.getArticleDate()).toEqual('Nov 30, 2020');
  });

  it(`should display description`, () => {
    expect(page.getArticleDescription()).toEqual(article.description);
  });

  it(`should display link`, () => {
    expect(page.getArticleLink()).toEqual(browser.baseUrl + article.key);
  });

  it(`should display link text`, () => {
    expect(page.getLinkText()).toEqual('Continue reading');
  });
});
