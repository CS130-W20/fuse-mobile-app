import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';


const gradient = require('../../src/assets/images/setombre.png');

const example = [
  {
    id: 13,
    title: 'George Clooney',
  },
  {
    id: 1,
    title: 'Brad Pitt',
  },
  {
    id: 2,
    title: 'Matt Damon',
  },
  {
    id: 3,
    title: 'Julia Roberts',
  },
  {
    id: 4,
    title: 'Andy Garcia',
  },
  {
    id: 5,
    title: 'Bernie Mac',
  },
  {
    id: 6,
    title: 'Scott Cann',
  },
  {
    id: 7,
    title: 'Elliot Gould',
  },
  {
    id: 8,
    title: 'Eddie Jemison',
  },
  {
    id: 9,
    title: 'Don Cheadle',
  },
  {
    id: 10,
    title: 'Shaobo Qin',
  },
  {
    id: 11,
    title: 'Carl Reiner',
  },
  {
    id: 12,
    title: 'Wayne Newton',
  },
];

const friendDict = {};

const keys = Object.keys(example);

for (let i = 0; i < keys.length; i += 1) {
  const value = example[keys[i]];
  friendDict[i] = value;
}

const listFriends = () => {
  const str = [];
  for (let i = 0; i < Object.keys(friendDict).length; i += 1) {
    const temp = (Object.values(friendDict[i]))[1];
    if (str.length < 4) {
      str.push(temp);
    }
  }
  if (str.length > 0) {
    return (`${str.join('\n')}\n and more...`);
  }
  return 'No friends invited yet.';
};

const styles = StyleSheet.create({
  trim: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    margin: '5%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container2: {
    margin: '5%',
    height: '80%',
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
    bottom: 25,
    left: '81%',
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
    width: 280,
    top: 100,
    height: 50,
    position: 'relative',
  },
  button: {
    justifyContent: 'flex-start',
    width: '72%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(247,116,33,1)',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');

export default function LightFuse({ navigation }) {
  const isOwner = true;
  const [isEditing, toggleIsEditing] = useState(isOwner);
  const title = 'Event Name';
  const description = 'Insert random text about event right here.\n This is super fun!\nBlah blah blah blah blah blah blah,\n';
  const [date, setDate] = useState('03-04-2020');
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState('');

  const scheduleButton = () => (
    <View>
      <CupertinoButtonGrey
        text="Schedule"
        style={styles.button}
        onPress={() => toggleIsEditing(false)}
        testID="litFuseScheduleButton"
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
        <View style={styles.container2}>
          <Text style={styles.loremIpsum} onPress={navigation.goBack} testID="litFuseBackButton">&lt;</Text>
          <Text style={styles.light}>LIGHT</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {description}
          </Text>
          <View style={styles.attendance}>
            <Text style={styles.attList}>
              {listFriends()}
            </Text>
          </View>
          <Text style={styles.deadline}>Event Date:</Text>
          <DatePicker
            style={styles.deadline}
            date={date}
            mode="date"
            placeholder="select date"
            format="MM-DD-YYYY"
            minDate="01-01-2020"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={setDate}
          />
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Location"
            onChangeText={setLocation}
            editable={isEditing}
            testID="litFuseEventLocationField"
          />
        </View>
        { isEditing ? scheduleButton() : null }
      </View>
    </ImageBackground>
  );
}

LightFuse.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
