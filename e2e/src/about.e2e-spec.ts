import { AboutPage } from './about.po';

describe(`<${AboutPage.HtmlTagComponent}>`, () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
    page.navigateToAbout();
  });

  it(`should display title`, () => {
    expect(page.getTitleText()).toEqual('About');
  });

  it(`should display content`, () => {
    expect(page.getContentText()).toEqual(
      'Lorem ipsum dólor sít amet, cu hís sáperet comprehénsam. Usu quas verterem no, mea unum dolores cu, ñec an libris épicurei reformídans. Omnesque assueverít éx vim. Té nihil cópiosae sapientem quo. Errem legimus pri ex, éx éum disséñtias temporibus.'
    );
  });
});
