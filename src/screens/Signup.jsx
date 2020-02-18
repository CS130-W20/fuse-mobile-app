import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Dimensions, Image,
} from 'react-native';

import MaterialUnderlineTextbox from '../components/signup/MaterialUnderlineTextbox';
import CupertinoButtonGrey from '../components/signup/CupertinoButtonGrey';

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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // username: '',
      // email: '',
      // password: '',
    };
  }

  // onSignup() {
  //   const { username, password } = this.state;
  //   console.log('username:', this.state.username, 'email:', this.state.email,
  //     'password:', this.state.password);
  // }

  render() {
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
        <CupertinoButtonGrey
          text1="create"
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
