import { browser, by, element } from 'protractor';

export class NavBarPage {
  static HtmlTagComponent = 'app-nav-bar';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getArticleLink(): Promise<string> {
    return element(by.css('.nav-item[href="/articles"]')).getText() as Promise<
      string
    >;
  }

  getAboutLink(): Promise<string> {
    return element(by.css('.nav-item[href="/about"]')).getText() as Promise<
      string
    >;
  }
}
