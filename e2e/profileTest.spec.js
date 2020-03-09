const { reloadApp } = require('detox-expo-helpers');

describe('Profile Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('user can successfully see their user profile part 1', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('test@test.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('asdf');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
  });

  it('user can successfully see their user profile part 2', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToProfile')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('userProfile')));
  });

  // it('user can click the add event button in the profile screen', async () => {
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('goToProfile')).tap();
  //   // eslint-disable-next-line no-undef
  //   await element(by.id('addEventButton')).tap();
  //   // eslint-disable-next-line no-undef
  //   await expect(element(by.id('newFuseSubmitButton'))).toBeVisible();
  // });

  it('user can successfully see their events', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToProfile')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('userEvents')));
  });

  it('user can successfully go to their settings', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToProfile')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('userSettings')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('settingsScreen')));
  });

  it('user can successfully go to edit profile page from their profile screen', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToProfile')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('userSettings')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('settingsEditProfile')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('editProfileScreen'))).toBeVisible();
  });

  it('user can successfully edit their profile part 1', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToProfile')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('userSettings')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('settingsEditProfile')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('editProfileName'))).toHaveText('Lol');
    // eslint-disable-next-line no-undef
    await expect(element(by.id('editProfileBio'))).toHaveText('Yo');
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileName')).clearText();
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileBio')).clearText();
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileName')).typeText('Test Name');
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileBio')).typeText('Test Bio');
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileSaveButton')).tap();
  });

  it('user can successfully edit their profile part 2', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('goToProfile')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('userSettings')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('settingsEditProfile')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('editProfileName'))).toHaveText('Test Name');
    // eslint-disable-next-line no-undef
    await expect(element(by.id('editProfileBio'))).toHaveText('Test Bio');
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileName')).clearText();
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileBio')).clearText();
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileName')).typeText('Lol');
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileBio')).typeText('Yo');
    // eslint-disable-next-line no-undef
    await element(by.id('editProfileSaveButton')).tap();
  });
});
