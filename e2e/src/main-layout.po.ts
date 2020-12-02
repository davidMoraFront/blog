import { browser, by, element } from 'protractor';

export class MainLayoutPage {
  static HtmlTagComponent = 'app-main-layout';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleLink(): Promise<string> {
    return element(
      by.css('app-main-layout header .title a')
    ).getText() as Promise<string>;
  }

  getTagElement(name: string) {
    return element(by.tagName(name)).isPresent();
  }
}
