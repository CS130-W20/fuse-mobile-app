import React, { PureComponent } from 'react';
//  import { Text, View } from 'react-native';
import {
  StyleSheet, View, Text, Image, ImageBackground,
} from 'react-native';
import CupertinoButtonGrey from '../components/login/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/login/MaterialUnderlineTextbox';
/*  import Light from "../components/Light";
import WhitePanel from "../components/WhitePanel";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
*/

const gradient = require('../../src/assets/images/setombre.png');


const styles = StyleSheet.create({
  trim: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  loremIpsum: {
    width: 34,
    height: 50,
    color: 'rgba(218,209,209,1)',
    fontSize: 40,
    //  fontFamily: "courier-regular"
  },
  light: {
    color: 'rgba(218,209,209,1)',
    fontSize: 30,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    // fontFamily: "alata-regular"
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    top: 20,
    position: 'relative',
    color: 'rgba(129,129,129,1)',
  },
  description: {
    textAlign: 'center',
    position: 'relative',
    top: 40,
    width: '90%',
    alignSelf: 'center',
    maxHeight: 80,
    color: 'rgba(129,129,129,1)',
  },
  attendance: {
    width: '90%',
    height: 120,
    borderRadius: 10,
    backgroundColor: 'rgba(233,229,229,1)',
    alignSelf: 'center',
    top: 80,
    position: 'relative',
  },
  attList: {
    textAlign: 'center',
    top: 10,
    position: 'relative',
    color: 'rgba(129,129,129,1)',
  },
  nameInput: {
    height: 80,
    top: 120,
    width: '95%',
    position: 'relative',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
  },
  image: {
    bottom: 20,
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
  deadline: {
    flexDirection: 'row',
    width: '95%',
    top: 100,
    height: 50,
    position: 'relative',
  },
  button: {
    width: '75%',
    height: 50,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(247,116,33,1)',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');
const calendarIcon = require('../../src/assets/images/calendar.png');


export default class LightFuse extends PureComponent {
  render() {
    return (
      <ImageBackground source={gradient} style={styles.trim}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.loremIpsum}>&lt;</Text>
            <Text style={styles.light}>LIGHT</Text>
            <Text style={styles.title}>Event Name</Text>
            <Text style={styles.description}>
              Insert random text about event right here.
              This is super fun!
              Blah blah blah blah blah blah blah,
              I want to test the text wrap.
              What happens when this block of text gets to its max height?
            </Text>
            <View style={styles.attendance}>
              <Text style={styles.attList}>
                List of guests
                {'\n'}
                Person1
                {'\n'}
                Person2
                {'\n'}
              </Text>
            </View>
            <View style={styles.deadline}>
              <Image
                source={calendarIcon}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <MaterialUnderlineTextbox
                textInput1="Event Date"
                style={{ left: 30, width: 250 }}
              />
            </View>
            <MaterialUnderlineTextbox
              style={styles.nameInput}
              textInput1="Event Location"
            />
            <CupertinoButtonGrey
              text1="Schedule"
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
