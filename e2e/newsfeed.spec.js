const { reloadApp } = require('detox-expo-helpers');

describe('Newsfeed Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('user see the event tiles in the newsfeed', async () => {
    // // eslint-disable-next-line no-undef
    // await element(by.id('loginEmail')).typeText('test@test.com');
    // // eslint-disable-next-line no-undef
    // await element(by.id('loginPassword')).typeText('asdf');
    // // eslint-disable-next-line no-undef
    // await element(by.id('loginButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newsfeedTile')));
  });

  it('user can click the add event button in the newsfeed', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseSubmitButton'))).toBeVisible();
  });

//   it('user can go to the search screen from the newsfeed screen', async () => {
//     // eslint-disable-next-line no-undef
//     await element(by.id('loginEmail')).typeText('test@test.com');
//     // eslint-disable-next-line no-undef
//     await element(by.id('loginPassword')).typeText('asdf');
//     // eslint-disable-next-line no-undef
//     await element(by.id('loginButton')).tap();
//     // eslint-disable-next-line no-undef
//     await element(by.id('searchTabButton')).tap();
//   });
});
