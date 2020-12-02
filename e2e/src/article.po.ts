import { Article } from './../../src/app/models/article';
import { browser, by, element } from 'protractor';

export class ArticlePage {
  static HtmlTagComponent = 'app-article';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToArticle(art: Article): Promise<unknown> {
    return browser.get(browser.baseUrl + art.key) as Promise<unknown>;
  }

  /* getArticleImg(): Promise<string> {
    return element(by.css('.card img')).getAttribute('src') as Promise<string>;
  } */

  getArticleImg(): Promise<string> {
    return element(by.css('.article img')).getAttribute('src') as Promise<
      string
    >;
  }

  getArticleTitle(): Promise<string> {
    return element(by.css('.article h1')).getText() as Promise<string>;
  }

  getArticleDate(): Promise<string> {
    return element(by.css('.article .date')).getText() as Promise<string>;
  }

  getArticleDescription(): Promise<string> {
    return element(by.css('.article .content')).getAttribute(
      'innerHTML'
    ) as Promise<string>;
  }
}
