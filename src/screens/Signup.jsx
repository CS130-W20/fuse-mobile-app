import React, { useEffect } from 'react';
import {
  View, StyleSheet, Text, Dimensions, Image, AsyncStorage,
} from 'react-native';
// import { Mutation } from 'react-apollo';
import { useMutation, useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';
import MaterialUnderlineTextbox from '../components/signup/MaterialUnderlineTextbox';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
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
    marginTop: 24,
    alignSelf: 'center',
  },
});

const sampleImage = require('../../src/assets/images/logo-fuse1.png');

const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                email
                name
            }
        }
    }
`;


const saveUserData = async ({ token, name, email }) => {
  console.log(token, name, email);
  await AsyncStorage.setItem(AUTH_TOKEN, token);
  await AsyncStorage.setItem(NAME, name);
  await AsyncStorage.setItem(EMAIL, email);
  AsyncStorage.getAllKeys().then((result) => {
    console.log('keys right after: ', result);
  });
};


const confirm = async ({ login }) => {
  console.log('confirming mutation');
  console.log(login);
  const { token, user } = login;
  const { name, email } = user;
  await saveUserData({ token, name, email });
  AsyncStorage.getItem(AUTH_TOKEN).then((result) => {
    console.log(result);
  });
  AsyncStorage.getAllKeys().then((result) => {
    console.log(result);
  });
};

// const attemptLogin = async (mutation) => {
//   console.log('attempting login');
//   // setIsLoading(true);
//   try {
//     await mutation();
//   } catch (err) {
//     console.warn(err);
//     // setError(err);
//     // setIsLoading(false);
//   }
//   console.log('login completed');
// };

const USER_QUERY = gql`
  query userQuery {
    user {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const [loginMutation, loginResult] = useMutation(LOGIN_MUTATION);
  const { data, loading } = useQuery(USER_QUERY);

  useEffect(() => {
    const confirmLogin = async () => {
      console.log('data: ', loginResult.data);
      // console.log(error);
      const loginData = loginResult.data;
      if (loginData) await confirm(loginData);
    };
    confirmLogin();
  }, [data]);

  const attemptLogin = () => {
    console.log('logging in');
    try {
      loginMutation({
        variables: { email: 'aaron@berdy.com', password: '123456' },
        onCompleted: (d) => confirm(d),
        refetchQueries: [{ query: USER_QUERY }],
      });
      console.log('done logging in');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <Text> LOADING... </Text>;
  const name = data && data.user ? data.user.name : 'NOT LOGGED IN';
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
      <Text>{name}</Text>
      <MaterialUnderlineTextbox
        textInput1="Username"
        style={styles.materialUnderlineTextbox1}
      />
      <MaterialUnderlineTextbox
        textInput1="Password"
        style={styles.materialUnderlineTextbox2}
      />
      <MaterialUnderlineTextbox
        textInput1="Email"
        style={styles.materialUnderlineTextbox3}
      />
      <MaterialUnderlineTextbox
        textInput1="Confirm Password"
        style={styles.materialUnderlineTextbox4}
      />
      {/* <CupertinoButtonGrey */}
      {/*  text1="create" */}
      {/*  style={styles.cupertinoButtonGrey1} */}
      {/* /> */}
      <CupertinoButtonGrey
        onPress={attemptLogin}
        text="create"
        style={styles.cupertinoButtonGrey1}
      />
      {/* <Mutation */}
      {/*  mutation={LOGIN_MUTATION} */}
      {/*  variables={{ email: 'aaron@berdy.com', password: '123456' }} */}
      {/*  onCompleted={(data) => confirm(data)} */}
      {/* > */}
      {/*  {(loginMutation, { data }) => */}
      {/*    <Button */}
      {/*      onPress={() => { attemptLogin(loginMutation); }} */}
      {/*      title="create" */}
      {/*      style={styles.cupertinoButtonGrey1} */}
      {/*    />} */}
      {/* </Mutation> */}
      {/* // <Button onClick={() => {attemptLogin(postMutation)}} */}
      {/* //                          fullWidth */}
      {/* //                          variant="contained" */}
      {/* //                          color="primary" */}
      {/* //                          className={classes.submit} */}
      {/* //                          disableFocusRipple */}
      {/* //                          disabled={isLoading || !allFilled} */}
      {/* // >Submit</Button>} */}
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
