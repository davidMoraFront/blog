import { ArticleListPage } from './article-list.po';

describe(`<${ArticleListPage.HtmlTagComponent}>`, () => {
  let page: ArticleListPage;

  beforeEach(() => {
    page = new ArticleListPage();
    page.navigateToArticles();
  });

  it(`should display articles lenght`, () => {
    expect(page.getArticlesLenght()).toEqual(3);
  });
});
