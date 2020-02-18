import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, Alert,
} from 'react-native';
import * as Facebook from 'expo-facebook';
import { PropTypes } from 'prop-types';

async function loginFB() {
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
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    // eslint-disable-next-line no-alert
    alert(`Facebook Login Error: ${message}`);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(213,204,204,1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 17,
    // fontFamily: "roboto-500"
  },
});

function CupertinoButtonInfo(props) {
  const { style, text1 } = props;

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text
        style={styles.caption}
        onPress={() => loginFB()}
      >
        {text1 || 'Button'}

      </Text>
    </TouchableOpacity>
  );
}

CupertinoButtonInfo.propTypes = {
  style: PropTypes.objectOf(PropTypes.object()),
  text1: PropTypes.string.isRequired,
};

CupertinoButtonInfo.defaultProps = {
  style: {},
};

export default CupertinoButtonInfo;
