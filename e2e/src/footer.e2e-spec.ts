import { FooterPage } from './footer.po';

describe(`<${FooterPage.HtmlTagComponent}>`, () => {
  let page: FooterPage;

  beforeEach(() => {
    page = new FooterPage();
    page.navigateTo();
  });

  it(`should display footer text`, () => {
    expect(page.getFooterText()).toEqual('My Fancy Blog');
  });
});
