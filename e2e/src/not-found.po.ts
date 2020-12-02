import { browser, by, element } from 'protractor';

export class NotFoundPage {
  static HtmlTagComponent = 'app-not-found';

  navigateToNotFound(): Promise<unknown> {
    return browser.get(browser.baseUrl + '404') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.not-found h1')).getText() as Promise<string>;
  }

  getLinkText(): Promise<string> {
    return element(
      by.css('.not-found [href="/articles"]')
    ).getText() as Promise<string>;
  }
}
