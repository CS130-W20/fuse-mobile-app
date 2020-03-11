const { reloadApp } = require('detox-expo-helpers');

describe('Event Engine Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('user can login', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('loginEmail')).typeText('test@test.com');
    // eslint-disable-next-line no-undef
    await element(by.id('loginPassword')).typeText('asdf');
    // eslint-disable-next-line no-undef
    await element(by.id('loginButton')).tap();
  });

  it('user can see the fields in the new fuse page', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseSubmitButton')));
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseEventNameField')));
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseEventDescriptionField')));
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseFriendSelector')));
  });

  it('user can see the updated event fields in the new fuse page after pressing submit button', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Hiking');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Hey friends! Lets go hiking at Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSubmitButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseEventNameField'))).toHaveText('Hiking');
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseEventDescriptionField'))).toHaveText('Hey friends! Lets go hiking at Griffith Park');
  });

  it('user can successfully edit and save an event', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Hiking');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Hey friends! Lets go hiking at Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSubmitButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEditButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).clearText();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).clearText();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Bowling');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Lets go bowling!');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSaveButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseEventNameField'))).toHaveText('Bowling');
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseEventDescriptionField'))).toHaveText('Lets go bowling!');
  });

  it('user can successfully go back to newsfeed from event proposal stage', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Hiking');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Hey friends! Lets go hiking at Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSubmitButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseBackButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newsfeedTile')));
  });

  it('user can successfully light an event proposal', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Hiking');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Hey friends! Lets go hiking at Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSubmitButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseLightButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('litFuseScheduleButton'))).toBeVisible();
  });

  it('user can successfully go back to newsfeed from event lit stage', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Hiking');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Hey friends! Lets go hiking at Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSubmitButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseLightButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('litFuseBackButton')));
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newFuseBackButton')));
    // eslint-disable-next-line no-undef
    await expect(element(by.id('newsfeedTile')));
  });

  it('user can successfully schedule an event', async () => {
    // eslint-disable-next-line no-undef
    await element(by.id('addEventButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventNameField')).typeText('Hiking');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseEventDescriptionField')).typeText('Hey friends! Lets go hiking at Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseSubmitButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('newFuseLightButton')).tap();
    // eslint-disable-next-line no-undef
    await element(by.id('litFuseEventLocationField')).typeText('Griffith Park');
    // eslint-disable-next-line no-undef
    await element(by.id('litFuseScheduleButton')).tap();
    // eslint-disable-next-line no-undef
    await expect(element(by.id('litFuseEventLocationField'))).toHaveText('Griffith Park');
  });
});
