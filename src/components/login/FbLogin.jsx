/* eslint-disable react/prop-types */
import * as Facebook from 'expo-facebook';

export default async function loginFB() {
  try {
    await Facebook.initializeAsync('589405221608354');
    const {
      type,
      token,
      // expires,
      // permissions,
      // declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      console.log('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    // eslint-disable-next-line no-alert
    console.log(`Facebook Login Error: ${message}`);
  }
}
