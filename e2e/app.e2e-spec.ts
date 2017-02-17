import { Primeng1Page } from './app.po';

describe('primeng1 App', function() {
  let page: Primeng1Page;

  beforeEach(() => {
    page = new Primeng1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
