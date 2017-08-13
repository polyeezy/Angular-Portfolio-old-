import { Www.Valerianpolizzi.FrPage } from './app.po';

describe('www.valerianpolizzi.fr App', () => {
  let page: Www.Valerianpolizzi.FrPage;

  beforeEach(() => {
    page = new Www.Valerianpolizzi.FrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
