import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, Dimensions, AsyncStorage,
} from 'react-native';

import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Logo from '../components/login/Logo';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import loginFB from '../components/login/FbLogin';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import { AUTH_TOKEN, EMAIL, NAME } from '../constants';
import screenIds from '../navigation/ScreenIds';
import { LOGIN_MUTATION, USER_QUERY } from '../graphql/GeneralQueries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Math.round(Dimensions.get('window').width),
    backgroundColor: 'rgba(247,243,243,1)',
  },
  materialUnderlineTextbox1: {
    width: 280,
    height: 43,
    marginTop: 419,
    marginLeft: Math.round(Dimensions.get('window').width) / 8,
  },
  materialUnderlineTextbox2: {
    width: 280,
    height: 43,
    marginTop: 28,
    marginLeft: Math.round(Dimensions.get('window').width) / 8,
  },
  cupertinoButtonInfo: {
    top: 0,
    left: 0,
    width: 280,
    height: 38,
    position: 'absolute',
  },
  materialUnderlineTextbox3: {
    top: 50,
    left: 130,
    width: 165,
    height: 45,
    position: 'absolute',
    color: 'grey',
  },
  materialUnderlineTextbox4: {
    top: 70,
    left: 0,
    width: 280,
    height: 45,
    position: 'absolute',
    textAlign: 'center',
    color: 'grey',
  },
  cupertinoButtonInfoStack: {
    width: 280,
    height: 80,
    marginTop: 70,
    marginLeft: Math.round(Dimensions.get('window').width) / 8,
  },
  logo: {
    width: 271,
    height: 191,
    marginTop: -491,
    marginLeft: Math.round(Dimensions.get('window').width) / 6,
  },
  cupertinoButtonGrey1: {
    width: 280,
    height: 41,
    backgroundColor: 'rgba(237,92,69,1)',
    marginTop: 166,
    marginLeft: Math.round(Dimensions.get('window').width) / 8,
  },
});

const saveUserData = async ({ token, name, email }) => {
  await AsyncStorage.setItem(AUTH_TOKEN, token);
  await AsyncStorage.setItem(NAME, name);
  await AsyncStorage.setItem(EMAIL, email);
};

const confirm = async ({ login }) => {
  const { token, user } = login;
  const { name, email } = user;
  await saveUserData({ token, name, email });
};

const updateCache = (cache, { data: { login } }) => {
  const { token, user } = login;
  cache.writeQuery({
    query: USER_QUERY,
    data: { me: { ...user }, token },
  });
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [invalidEmailPasswordCombo, setInvalidEmailPasswordCombo] = useState(false);

  const [loginMutation, { data, error }] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    const confirmLogin = async () => {
      if (error) {
        if (error.message.startsWith('GraphQL error: Email is not associated with a user')
            || error.message.startsWith('GraphQL error: Invalid password')) {
          setInvalidEmailPasswordCombo(true);
        }
      }
      if (data) await confirm(data);
    };
    confirmLogin();
  }, [data, error]);

  const attemptLogin = (fbToken) => {
    loginMutation({
      variables: { email, password, fbToken },
      update: updateCache,
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  };

  const loginFBAndSaveToken = async () => {
    loginFB()
      .then(async (token) => attemptLogin(token));
  };

  return (
    <View style={styles.container}>
      <MaterialUnderlineTextbox
        placeholder="Email"
        textContentType="emailAddress"
        style={styles.materialUnderlineTextbox1}
        onChangeText={(text) => { setInvalidEmailPasswordCombo(false); setEmail(text); }}
        testID="loginEmail"
      />

      <MaterialUnderlineTextbox
        placeholder="Password"
        textContentType="password"
        style={styles.materialUnderlineTextbox2}
        secureTextEntry
        onChangeText={(text) => { setInvalidEmailPasswordCombo(false); setPassword(text); }}
        testID="loginPassword"
      />

      <View style={styles.cupertinoButtonInfoStack}>
        <CupertinoButtonGrey
          text="login with facebook"
          style={styles.cupertinoButtonInfo}
          onPress={loginFBAndSaveToken}
          testID="loginFacebookButton"
        />
        <Text
          style={styles.materialUnderlineTextbox3}
            // eslint-disable-next-line no-console
          onPress={() => navigation.navigate(screenIds.signUp)}
          testID="loginNoAccount"
        >
          dont have an account?

        </Text>
        {
          invalidEmailPasswordCombo
          && (
          <Text
            style={styles.materialUnderlineTextbox4}
            // eslint-disable-next-line no-console
            onPress={() => navigation.navigate(screenIds.signUp)}
            testID="loginWrongCombo"
          >
            Invalid email/password combo
          </Text>
          )
        }
      </View>

      <Logo style={styles.logo} />

      <CupertinoButtonGrey
        text="login"
        style={styles.cupertinoButtonGrey1}
        onPress={attemptLogin}
        testID="loginButton"
      />
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
