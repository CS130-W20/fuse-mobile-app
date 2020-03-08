const { reloadApp } = require('detox-expo-helpers');

describe('Login Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('email, password, login button, and facebook button can be seen', async () => {
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginEmail'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginPassword'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginButton'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginFacebookButton'))).toBeVisible();
  });

  it('user used invalid login', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('wrong@gmail.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('wrongbro');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginWrongCombo'))).toBeVisible();
  });

  it('user can login', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('test@test.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('asdf');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newsfeed')));
  });
});
