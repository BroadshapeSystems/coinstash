import { CoinstashPage } from './app.po';

describe('coinstash App', () => {
  let page: CoinstashPage;

  beforeEach(() => {
    page = new CoinstashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
