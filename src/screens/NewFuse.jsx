import React from 'react';
import PropTypes from 'prop-types';
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
    borderRadius: 10,
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
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#ed5c45',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');
const calendarIcon = require('../../src/assets/images/calendar.png');

export default function NewFuse({ isOwner }) {
  let isSet = false;
  let isEditing = true;

  const updateSet = () => {
    isSet = true;
  };
  const updateEditing = (editing) => {
    isEditing = editing;
  };

  const renderSet = () => (
    <View>
      <Text
        style={styles.nameInput}
        textInput1="Event Name"
      />
      <Text
        style={styles.nameInput}
        textInput1="Event Description"
      />
      <Text
        style={styles.nameInput}
        textInput1="Event Invite Group"
      />
      <View style={styles.deadline}>
        <Image
          source={calendarIcon}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
        <Text
          textInput1="Event Deadline"
          style={{ left: 30, width: 250 }}
        />
      </View>
      {isOwner
        ? (
          <CupertinoButtonGrey
            text1="Edit"
            style={styles.button}
            onPress={updateEditing(true)}
          />
        )
        : (
          <CupertinoButtonGrey
            text1="Join"
            style={styles.button}
          />
        )}
      <Image
        source={fuseLogo}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );

  const renderEditing = () => (
    <View>
      {isSet
        ? (
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Name"
          />
        )
        : (
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Name that was entered"
          />
        )}
      <MaterialUnderlineTextbox
        style={styles.nameInput}
        textInput1="Event Description"
      />
      <MaterialUnderlineTextbox
        style={styles.nameInput}
        textInput1="Event Invite Group"
      />
      <View style={styles.switch}>
        <Text style={{ color: 'rgba(129,129,129,1)' }}>Send Notifications?</Text>
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
        onPress={updateSet}
        updateEditing={updateEditing(false)}
      />
      <Image
        source={fuseLogo}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );

  return (
    <ImageBackground source={gradient} style={styles.trim}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.loremIpsum}>&lt;</Text>
          <Text style={styles.set}>SET</Text>
          {isEditing ? renderSet(isOwner) : renderEditing }
        </View>
      </View>
    </ImageBackground>
  );
}

NewFuse.propTypes = {
  isOwner: PropTypes.bool.isRequired,
};
