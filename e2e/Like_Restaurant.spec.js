/* eslint-disable no-undef */
Feature('Like Restaurant');

Scenario('Liking a restaurant', ({ I }) => {
  I.amOnPage('#/');

  I.executeScript('window.scrollTo(0, 1500);');
  I.wait(5);
  I.seeElement('a.card-title');
  I.waitForElement('a.card-title');
  I.click(locate('a.card-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
});
