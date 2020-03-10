const { reloadApp } = require('detox-expo-helpers');

describe('Notifcation Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('user can successfully see their notifications part 1', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('test@test.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('asdf');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
  });

  it('user can successfully see their notifications part 2', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToNotifications')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('notificationScreen')));
  });
});
