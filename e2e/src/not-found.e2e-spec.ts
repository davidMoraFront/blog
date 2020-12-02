import { NotFoundPage } from './not-found.po';

describe(`<${NotFoundPage.HtmlTagComponent}>`, () => {
  let page: NotFoundPage;

  beforeEach(() => {
    page = new NotFoundPage();
    page.navigateToNotFound();
  });

  it(`should display title`, () => {
    expect(page.getTitleText()).toEqual(
      `Whoops! The page you're looking for doesn't exist.`
    );
  });

  it(`should display linkText`, () => {
    expect(page.getLinkText()).toEqual('Back to Articles');
  });
});
