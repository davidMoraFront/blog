import { browser, by, element } from 'protractor';

export class ArticlePreviewPage {
  static HtmlTagComponent = 'app-article-preview';
  elem = element.all(by.css('app-article-preview')).first();

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToArticles(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'articles') as Promise<unknown>;
  }

  /* getArticleImg(): Promise<string> {
    return element(by.css('.card img')).getAttribute('src') as Promise<string>;
  } */

  getArticleImg(): Promise<string> {
    return this.elem
      .element(by.css('.card img'))
      .getAttribute('src') as Promise<string>;
  }

  getArticleTitle(): Promise<string> {
    return this.elem.element(by.css('.card h3')).getText() as Promise<string>;
  }

  getArticleDate(): Promise<string> {
    return this.elem.element(by.css('.card .meta-info')).getText() as Promise<
      string
    >;
  }

  getArticleDescription(): Promise<string> {
    return this.elem
      .element(by.css('.card .description'))
      .getAttribute('innerHTML') as Promise<string>;
  }

  getArticleLink(): Promise<string> {
    return this.elem.element(by.css('.card a')).getAttribute('href') as Promise<
      string
    >;
  }

  getLinkText(): Promise<string> {
    return this.elem.element(by.css('.card a')).getText() as Promise<string>;
  }
}
