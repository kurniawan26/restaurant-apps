/* eslint-disable no-undef */
// Create scenario for test input name and message in this restaurant
Feature('Giving Review');

Scenario('Giving input name and message', ({ I }) => {
  I.amOnPage('#/');

  I.executeScript('window.scrollTo(0, 1500);');
  I.wait(5);
  I.seeElement('a.card-title');
  I.waitForElement('a.card-title');
  I.click(locate('a.card-title').first());

  I.seeElement('#full-name');
  I.fillField('#full-name', 'Raffi');
  I.seeElement('#review');
  I.fillField('#review', 'Ini adalah review saya');
  I.executeScript('document.querySelector(".btn--form").click()');
});
