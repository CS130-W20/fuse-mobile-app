import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, ImageBackground, Modal, ScrollView,
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

const listFriends = (trim) => {
  const str = [];
  for (let i = 0; i < Object.keys(friendDict).length; i += 1) {
    const temp = (Object.values(friendDict[i]))[1];
    if (str.length < 4 || !trim) {
      str.push(temp);
    }
  }
  if (str.length > 0) {
    if (trim) {
      return (`${str.join('\n')}\n and more...`);
    }
    return (`${str.join('\n')}\n`);
  }
  return 'No friends joined yet.';
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
  attHeader: {
    justifyContent: 'center',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    color: 'rgba(129,129,129,1)',
  },
  attList: {
    textAlign: 'center',
    top: 10,
    position: 'relative',
    color: 'rgba(129,129,129,1)',
  },
  locInput: {
    height: 80,
    top: 80,
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
    top: 110,
    height: 50,
    position: 'relative',
  },
  button: {
    width: '72%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(247,116,33,1)',
  },
  modal: {
    top: '30%',
    height: 300,
    width: '85%',
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    top: 20,
    position: 'relative',
    color: 'rgba(129,129,129,1)',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');

export default function LightFuse({ navigation }) {
  const isOwner = true;
  const [isEditing, toggleIsEditing] = useState(isOwner);
  const title = 'Event Name';
  const description = 'Insert random text about event right here.\n This is super fun!\nBlah blah blah blah blah blah blah,\n';
  const [date, setDate] = useState('03-04-2020');
  const [location, setLocation] = useState('Event Location');
  const [expandFriends, toggleFriends] = useState(false);

  const scheduleButton = () => (
    <View>
      <CupertinoButtonGrey
        text="Schedule"
        style={styles.button}
        onPress={() => toggleIsEditing(false)}
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
        <ScrollView style={styles.container2}>
          <Text style={styles.loremIpsum} onPress={navigation.goBack}>&lt;</Text>
          <Text style={styles.light}>LIGHT</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {description}
          </Text>
          <View style={styles.attendance}>
            <Text style={styles.attList} onPress={() => toggleFriends(true)}>
              {listFriends(true)}
            </Text>
          </View>
          <Modal
            animationType="slide"
            visible={expandFriends}
            transparent
          >
            <View style={styles.modal}>
              <ImageBackground
                source={gradient}
                style={styles.container}
                resizeMode="stretch"
                borderRadius={10}
              >
                <View style={styles.container}>
                  <Text style={styles.attHeader}>Attendees</Text>
                  <Text style={styles.loremIpsum} onPress={() => toggleFriends(false)}>X</Text>
                  <ScrollView>
                    <Text style={styles.modalText}>
                      {listFriends(false)}
                    </Text>
                  </ScrollView>
                </View>
              </ImageBackground>
            </View>
          </Modal>
          <MaterialUnderlineTextbox
            style={styles.locInput}
            placeholder={location}
            onChangeText={setLocation}
            editable={isEditing}
          />
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
          <View style={{ height: 100 }} />
        </ScrollView>
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
