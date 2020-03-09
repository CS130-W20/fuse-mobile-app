const { reloadApp } = require('detox-expo-helpers');

describe('Profile Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('user can successfully see their user profile', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('test@test.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('asdf');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('userProfile')));
  });

  it('user can click the add event button in the profile screen', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseSubmitButton'))).toBeVisible();
  });

  it('user can successfully see their events', async () => {
    // eslint-disable-next-line no-undef
    await expect(element(by.id('userEvents')));
  });

  it('user can successfully go to their settings', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('userSettings')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('settingsScreen')));
  });

  it('user can successfully go to edit profile page from their profile screen', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('userSettings')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('settingsScreen')));
  });
});
