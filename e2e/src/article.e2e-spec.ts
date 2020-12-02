import { ARTICLES } from './../../src/app/models/mock-articles';
import { Article } from './../../src/app/models/article';
import { ArticlePage } from './article.po';

describe(`<${ArticlePage.HtmlTagComponent}>`, () => {
  let page: ArticlePage;
  let article: Article = ARTICLES[0];

  beforeEach(() => {
    page = new ArticlePage();
    page.navigateToArticle(article);
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
    expect(page.getArticleDescription()).toEqual(article.content);
  });
});
