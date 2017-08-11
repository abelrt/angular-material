import { G4MaterialPage } from './app.po';

describe('g4-material App', () => {
  let page: G4MaterialPage;

  beforeEach(() => {
    page = new G4MaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
