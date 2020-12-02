import { NavBarPage } from './nav-bar.po';

describe(`<${NavBarPage.HtmlTagComponent}>`, () => {
  let page: NavBarPage;

  beforeEach(() => {
    page = new NavBarPage();
    page.navigateTo();
  });

  it(`should display articleLink`, () => {
    expect(page.getArticleLink()).toEqual('Articles');
  });

  it(`should display aboutLink`, () => {
    expect(page.getAboutLink()).toEqual('About');
  });
});
