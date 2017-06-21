import { PlanningAppPage } from './app.po';

describe('planning-app App', () => {
  let page: PlanningAppPage;

  beforeEach(() => {
    page = new PlanningAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
