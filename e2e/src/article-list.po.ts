import { browser, by, element } from 'protractor';

export class ArticleListPage {
  static HtmlTagComponent = 'app-article-list';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToArticles(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'articles') as Promise<unknown>;
  }

  getArticlesLenght(): Promise<string> {
    return (element
      .all(by.css('app-article-preview'))
      .count() as unknown) as Promise<string>;
  }
}
