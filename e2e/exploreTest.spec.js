const { reloadApp } = require('detox-expo-helpers');

describe('Notifcation Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('user can successfully see the explore page part 1', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('test@test.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('asdf');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
  });

  it('user can successfully see the explore page part 2', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToExplore')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('exploreScreen')));
  });

  it('user can successfully search a user in the explore page', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToExplore')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('exploreSearchBar')).typeText('Chiara');
    // eslint-disable-next-line no-undef
    await expect(element(by.id('friendTiles'))).toBeVisible();
  });
});
