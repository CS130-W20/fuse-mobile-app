import React, { PureComponent } from 'react';
//  import { Text, View } from 'react-native';
import {
  StyleSheet, View, Text, Image, Switch, ImageBackground,
} from 'react-native';
import CupertinoButtonGrey from '../components/login/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/login/MaterialUnderlineTextbox';
/*  import Light from "../components/Light";
import WhitePanel from "../components/WhitePanel";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
*/

const gradient = require('../../src/assets/images/Gradient_LIswryi.png');


const styles = StyleSheet.create({
  trim: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    margin: '5%',
    backgroundColor: 'white',
  },
  loremIpsum: {
    width: 34,
    height: 50,
    color: 'rgba(218,209,209,1)',
    fontSize: 40,
    //  fontFamily: "courier-regular"
  },
  set: {
    color: 'rgba(218,209,209,1)',
    fontSize: 30,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    // fontFamily: "alata-regular"
  },
  nameInput: {
    height: 80,
    top: 40,
    width: '95%',
    position: 'relative',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
  },
  image: {
    top: 601,
    left: 275,
    width: 88,
    height: 78,
    position: 'absolute',
    transform: [
      {
        rotate: '15.00deg',
      },
    ],
  },
  switch: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    top: 80,
    height: 30,
    position: 'relative',
  },
  deadline: {
    flexDirection: 'row',
    width: '95%',
    top: 130,
    height: 50,
    position: 'relative',
  },
  button: {
    width: '75%',
    height: 50,
    top: 280,
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: '#ed5c45',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');
const calendarIcon = require('../../src/assets/images/calendar.png');


export default class NewFuse extends PureComponent {
  render() {
    return (
      <ImageBackground source={gradient} style={styles.trim}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.loremIpsum}>&lt;</Text>
            <Text style={styles.set}>SET</Text>
            <MaterialUnderlineTextbox
              style={styles.nameInput}
              textInput1="Event Name"
            />
            <MaterialUnderlineTextbox
              style={styles.nameInput}
              textInput1="Event Description"
            />
            <MaterialUnderlineTextbox
              style={styles.nameInput}
              textInput1="Event Invite Group"
            />
            <View style={styles.switch}>
              <Text>Send Notifications?</Text>
              <Switch
                disabled={false}
                trackColor={{ true: 'rgba(230, 230, 230,1)' }}
              />
            </View>
            <View style={styles.deadline}>
              <Image
                source={calendarIcon}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <MaterialUnderlineTextbox
                textInput1="Event Deadline"
                style={{ left: 30, width: 250 }}
              />
            </View>
            <CupertinoButtonGrey
              text1="Submit"
              style={styles.button}
            />
            <Image
              source={fuseLogo}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}