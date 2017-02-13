import { Ng2MySitePage } from './app.po';

describe('ng2-my-site App', function() {
  let page: Ng2MySitePage;

  beforeEach(() => {
    page = new Ng2MySitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
