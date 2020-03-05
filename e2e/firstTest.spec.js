const { reloadApp } = require('detox-expo-helpers');
// const detox = require('detox');

describe('Login', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should show the dont have an account disclaimer', async () => {
    // eslint-disable-next-line no-undef
    await expect(element(by.id('no_account'))).toBeVisible();
  });
});
