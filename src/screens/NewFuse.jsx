import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, Switch, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import { CREATE_EVENT_MUTATION } from '../graphql/GeneralQueries';

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


export default function NewFuse({ navigation }) {
  const [eventName, setEventName] = useState('');

  const [createEventMutation] = useMutation(CREATE_EVENT_MUTATION);

  const createEvent = () => {
    createEventMutation({
      variables: {
        title: eventName,
      },
    }).then(navigation.goBack())
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  return (
    <ImageBackground source={gradient} style={styles.trim}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.loremIpsum} onPress={navigation.goBack}>&lt;</Text>
          <Text style={styles.set}>SET</Text>
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Name"
            onChangeText={setEventName}
          />
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Description"
          />
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Invite Group"
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
            text="Submit"
            style={styles.button}
            onPress={createEvent}
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

NewFuse.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
