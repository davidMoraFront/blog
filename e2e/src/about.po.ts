import { browser, by, element } from 'protractor';

export class AboutPage {
  static HtmlTagComponent = 'app-about';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToAbout(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'about') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.about .about-title')).getText() as Promise<string>;
  }

  getContentText(): Promise<string> {
    return element(by.css('.about .about-content')).getText() as Promise<
      string
    >;
  }
}
