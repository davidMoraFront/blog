import { MainLayoutPage } from './main-layout.po';

describe(`<${MainLayoutPage.HtmlTagComponent}>`, () => {
  let page: MainLayoutPage;

  beforeEach(() => {
    page = new MainLayoutPage();
    page.navigateTo();
  });

  it(`should display titleLink`, () => {
    expect(page.getTitleLink()).toEqual('My Fancy Blog');
  });

  it(`should is present tag nav-bar`, () => {
    expect(page.getTagElement('app-nav-bar')).toBe(true);
  });

  it(`should is present tag footer`, () => {
    expect(page.getTagElement('app-footer')).toBe(true);
  });
});
