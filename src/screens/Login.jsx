import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, Dimensions, AsyncStorage,
} from 'react-native';

import { useMutation, useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Logo from '../components/login/Logo';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import CupertinoButtonInfo from '../components/login/CupertinoButtonInfo';
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
    data: { user, token },
  });
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginMutation, loginResult] = useMutation(LOGIN_MUTATION);
  const { data } = useQuery(USER_QUERY);

  useEffect(() => {
    const confirmLogin = async () => {
      const loginData = loginResult.data;
      if (loginData) await confirm(loginData);
    };
    confirmLogin();
    if (data) navigation.navigate(screenIds.appTabNavigator);
  }, [loginResult]);

  return (
    <View style={styles.container}>
      <MaterialUnderlineTextbox
        placeholder="Email"
        textContentType="emailAddress"
        style={styles.materialUnderlineTextbox1}
        onChangeText={(text) => setEmail(text)}
      />

      <MaterialUnderlineTextbox
        placeholder="Password"
        textContentType="password"
        style={styles.materialUnderlineTextbox2}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.cupertinoButtonInfoStack}>
        <CupertinoButtonInfo
          text1="login with facebook"
          style={styles.cupertinoButtonInfo}
        />
        <Text
          style={styles.materialUnderlineTextbox3}
            // eslint-disable-next-line no-console
          onPress={() => navigation.navigate(screenIds.signUp)}
        >
          dont have an account?

        </Text>
      </View>

      <Logo style={styles.logo} />

      <CupertinoButtonGrey
        text="login"
        style={styles.cupertinoButtonGrey1}
        onPress={() => {
          loginMutation({
            variables: { email, password },
            update: updateCache,
          });
        }}
      />
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
