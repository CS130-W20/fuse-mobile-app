import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Dimensions,
} from 'react-native';

import Logo from '../components/login/Logo';
import MaterialUnderlineTextbox from '../components/login/MaterialUnderlineTextbox';
import CupertinoButtonInfo from '../components/login/CupertinoButtonInfo';
import CupertinoButtonGrey from '../components/login/CupertinoButtonGrey';

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


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // username: '',
      // password: '',
    };
  }

  // onLogin() {
  //   const { username, password } = this.state;
  //   console.log('username:', this.state.username, 'password:', this.state.password);
  // }

  render() {
    return (
      <View style={styles.container}>
        <MaterialUnderlineTextbox
          textInput1="Username"
          style={styles.materialUnderlineTextbox1}
        />

        <MaterialUnderlineTextbox
          textInput1="Password"
          style={styles.materialUnderlineTextbox2}
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
          text1="login"
          style={styles.cupertinoButtonGrey1}
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
}
