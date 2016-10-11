import { LearningAng2ModulesPage } from './app.po';

describe('learning-ang2-modules App', function() {
  let page: LearningAng2ModulesPage;

  beforeEach(() => {
    page = new LearningAng2ModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
