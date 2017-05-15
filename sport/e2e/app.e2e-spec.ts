import { SportPage } from './app.po';

describe('sport App', () => {
  let page: SportPage;

  beforeEach(() => {
    page = new SportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
