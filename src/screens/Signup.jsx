import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, Dimensions, Image, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import screenIds from '../navigation/ScreenIds';
import { SIGNUP_MUTATION, USER_QUERY } from '../graphql/GeneralQueries';
import { AUTH_TOKEN, EMAIL, NAME } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Math.round(Dimensions.get('window').width),
    backgroundColor: 'rgba(247,243,243,1)',
  },
  image1: {
    top: 45,
    left: 46,
    width: 56,
    height: 62,
    position: 'absolute',
  },
  fuse1: {
    top: 89,
    left: 0,
    color: 'rgba(237,92,69,1)',
    position: 'absolute',
    fontSize: 20,
    // fontFamily: "alata-regular",
    letterSpacing: 3,
  },
  image1Stack: {
    width: 102,
    height: 109,
    marginTop: 57,
    marginLeft: 136,
  },
  materialUnderlineTextbox1: {
    width: 280,
    height: 43,
    marginTop: 8,
    alignSelf: 'center',
  },
  materialUnderlineTextbox2: {
    width: 280,
    height: 43,
    marginTop: 117,
    alignSelf: 'center',
  },
  materialUnderlineTextbox3: {
    width: 280,
    height: 43,
    marginTop: -123,
    alignSelf: 'center',
  },
  materialUnderlineTextbox4: {
    width: 280,
    height: 43,
    marginTop: 128,
    alignSelf: 'center',
  },
  cupertinoButtonGrey1: {
    width: 183,
    height: 41,
    backgroundColor: 'rgba(237,92,69,1)',
    marginTop: 171 + 24,
    alignSelf: 'center',
  },
  cupertinoButtonInfo: {
    width: 183,
    height: 41,
    backgroundColor: 'rgba(213,204,204,1)',
    marginTop: 24,
    alignSelf: 'center',
  },
});

const saveUserData = async ({ token, name, email }) => {
  await AsyncStorage.setItem(AUTH_TOKEN, token);
  await AsyncStorage.setItem(NAME, name);
  await AsyncStorage.setItem(EMAIL, email);
};

const confirm = async ({ signup }) => {
  const { token, user } = signup;
  const { name, email } = user;
  await saveUserData({ token, name, email });
};

const updateCache = (cache, { data: { signup } }) => {
  const { token, user } = signup;
  cache.writeQuery({
    query: USER_QUERY,
    data: { me: { ...user }, token },
  });
};

const sampleImage = require('../../src/assets/images/logo-fuse1.png');

// TODO: make the "back" button to go back to login prettier

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signupMutation, { data, error }] = useMutation(SIGNUP_MUTATION);

  const attemptSignup = () => {
    signupMutation({
      variables: { email, password, name },
      update: updateCache,
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  };

  useEffect(() => {
    const confirmSignup = async () => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      if (data) await confirm(data);
    };
    confirmSignup();
  }, [data, error]);

  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={sampleImage}
          resizeMode="contain"
          style={styles.image1}
        />
        <Text style={styles.fuse1}>FUSE</Text>
      </View>
      <MaterialUnderlineTextbox
        placeholder="Name"
        style={styles.materialUnderlineTextbox1}
        onChangeText={setName}
        textContentType="name"
        testID="signupName"
      />
      <MaterialUnderlineTextbox
        placeholder="Password"
        style={styles.materialUnderlineTextbox2}
        secureTextEntry
        textContentType="newPassword"
        onChangeText={setPassword}
        testID="signupPassword"
      />
      <MaterialUnderlineTextbox
        placeholder="Email"
        style={styles.materialUnderlineTextbox3}
        textContentType="emailAddress"
        onChangeText={setEmail}
        testID="signupEmail"
      />
      <CupertinoButtonGrey
        text="create"
        style={styles.cupertinoButtonGrey1}
        onPress={attemptSignup}
        testID="signupCreate"
      />
      <CupertinoButtonGrey
        text="back"
        style={styles.cupertinoButtonInfo}
        onPress={() => navigation.navigate(screenIds.login)}
        testID="signupBack"
      />

    </View>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
