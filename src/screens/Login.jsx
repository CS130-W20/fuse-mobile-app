import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, Dimensions, AsyncStorage,
} from 'react-native';

import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import { NavigationContainer } from '@react-navigation/native';
import Logo from '../components/login/Logo';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import CupertinoButtonInfo from '../components/login/CupertinoButtonInfo';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import { AUTH_TOKEN, EMAIL, NAME } from '../constants';
import LoggedIn from './LoggedIn';

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

const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
                name
            }
        }
    }
`;

const USER_QUERY = gql`
    query userQuery {
        user {
            id
            email
            name
        }
    }
`;

const saveUserData = async ({ token, name, email }) => {
  console.log(token, name, email);
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
  // const oldUserData = cache.readQuery({ query: USER_QUERY });
  cache.writeQuery({
    query: USER_QUERY,
    data: { user, token },
  });
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginMutation, loginResult] = useMutation(LOGIN_MUTATION);
  const { data } = useQuery(USER_QUERY);

  // const client = useApolloClient();
  //
  // // assuming won't have cookies when logging in (for testing)
  // useEffect(() => {
  //   const clearCache = async () => {
  //     AsyncStorage.clear();
  //   };
  //   clearCache();
  //   client.clearStore();
  // }, []);

  useEffect(() => {
    const confirmLogin = async () => {
      const loginData = loginResult.data;
      if (loginData) await confirm(loginData);
    };
    confirmLogin();
    if (data) console.log(`data: ${data.user.name}`);
  }, [loginResult]);

  console.log(data);
  if (data) return <LoggedIn />;

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
          onPress={() => console.log('CLICKED DONT HAVE AN ACCOUNT')}
        >
          dont have an account?

        </Text>
      </View>

      <Logo style={styles.logo} />

      <CupertinoButtonGrey
        text="login"
        style={styles.cupertinoButtonGrey1}
        onPress={() => {
          console.log(email, password);
          loginMutation({
            variables: { email, password },
            // refetchQueries: [{ query: USER_QUERY }],
            update: updateCache,
          });
        }}
      />
      {/*
        <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
        />
        <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
        />

        <Button
            title={'Login'}
            style={styles.input}
            onPress={this.onLogin.bind(this)
        }
        /> */}
    </View>
  );
}
