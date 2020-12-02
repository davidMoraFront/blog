import { browser, by, element } from 'protractor';

export class FooterPage {
  static HtmlTagComponent = 'app-footer';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getFooterText(): Promise<string> {
    return element(by.css('app-footer div')).getText() as Promise<string>;
  }
}
