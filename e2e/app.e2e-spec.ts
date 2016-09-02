import { Angular2HnPage } from './app.po';

describe('angular2-hn App', function() {
  let page: Angular2HnPage;

  beforeEach(() => {
    page = new Angular2HnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
