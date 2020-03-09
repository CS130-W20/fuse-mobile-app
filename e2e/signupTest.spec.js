const { reloadApp } = require('detox-expo-helpers');

describe('Signup Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should show the dont have an account disclaimer', async () => {
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginNoAccount'))).toBeVisible();
  });

  it('user goes to signup screen with expected fields and buttons', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginNoAccount')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('signupEmail'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('signupPassword'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('signupName'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('signupCreate'))).toBeVisible();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('signupBack'))).toBeVisible();
  });

  it('user can go back to login screen from signup screen', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginNoAccount')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('signupBack')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('loginButton'))).toBeVisible();
  });

  // it('user can sign up', async () => {
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('loginNoAccount')).tap();
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('signupName')).typeText('admin');
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('signupEmail')).typeText('admin@gmail.com');
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('signupPassword')).typeText('admin');
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('signupCreate')).tap();
  //   // DONT FORGET TO LOOK FOR COMPONENT IN HOME SCREEN
  //   // eslint-disable-next-line no-undef
  //   await expect(element(by.id('newsfeed')));
  // });
});
