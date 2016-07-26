import { Angular2animationsPage } from './app.po';

describe('angular2animations App', function() {
  let page: Angular2animationsPage;

  beforeEach(() => {
    page = new Angular2animationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
