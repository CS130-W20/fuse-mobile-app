/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, Switch, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import DatePicker from 'react-native-datepicker';
import Multiselect from '../components/fields/Multiselect';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import { CREATE_EVENT_MUTATION } from '../graphql/GeneralQueries';
import screenIds from '../navigation/ScreenIds';

const gradient = require('../../src/assets/images/Gradient_LIswryi.png');

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
    flexDirection: 'column',
  },
  container2: {
    margin: '5%',
    height: '70%',
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
    bottom: 40,
    left: '85%',
    width: 88,
    height: 78,
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
    top: 120,
    height: 80,
    position: 'relative',
  },
  deadline: {
    flexDirection: 'row',
    width: '95%',
    top: 80,
    height: 50,
    position: 'relative',
  },
  submit: {
    top: 300,
  },
  button: {
    width: '80%',
    height: 50,
    top: 5,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#ed5c45',
  },
  light: {
    width: '80%',
    height: 50,
    top: 60,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(247,116,33,1)',
  },
  edit: {
    justifyContent: 'flex-start',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#ed5c45',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');
const calendarIcon = require('../../src/assets/images/calendar.png');

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

const itemlist = [
  {
    title: 'Friends',
    id: 0,
    children: example,
  },
];

const friendDict = {};

const keys = Object.keys(example);

for (let i = 0; i < keys.length; i += 1) {
  const value = example[keys[i]];
  friendDict[i] = value;
}

const selectedText = (selectedItems) => {
  const str = [];
  for (let i = 0; i < Object.keys(friendDict).length; i += 1) {
    const temp = (Object.values(friendDict[i]))[1];
    if (selectedItems.includes((Object.values(friendDict[i]))[0])) {
      str.push(temp);
    }
  }
  if (str.length > 0) {
    return str.join(', ');
  }
  return 'No friends invited yet.';
};

export default function NewFuse({ navigation }) {
  const isOwner = true;
  const [isSet, updateSet] = useState(false);
  const [isEditing, updateEditing] = useState(isOwner);
  const [selectingFriends, toggleFriends] = useState(false);

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState('03-04-2020');
  const [selectedItems, onSelectedItemsChange] = useState([]);
  const [notifications, setNotifications] = useState(false);
  const [friendList, friendListChange] = useState('No friends invited');

  const [createEventMutation] = useMutation(CREATE_EVENT_MUTATION);

  const onConfirm = () => {
    toggleFriends(false);
    friendListChange(selectedText(selectedItems));
  };

  const createEvent = () => {
    createEventMutation({
      variables: {
        title: eventName,
      },
    }).then(updateEditing(false)).then(updateSet(true));
    /* .then(navigation.goBack())
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log(err);
      }); */
  };

  const friendSelector = () => (selectingFriends
    ? (
      <Multiselect
        style={{ alignSelf: 'center', width: '100%' }}
        itemlist={itemlist}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
        confirmFunc={onConfirm}
      />
    )
    : (
      <CupertinoButtonGrey
        style={{ top: 10 }}
        text="Add Friends"
        onPress={() => toggleFriends(isEditing)}
      />
    ));

  const notifSwitch = () => (
    <View style={styles.switch}>
      <Text style={{ color: 'rgba(129,129,129,1)' }}>Send Notifications?</Text>
      <Switch
        disabled={false}
        trackColor={{ true: 'rgba(230, 230, 230,1)' }}
        onValueChange={setNotifications}
        value={notifications}
      />
    </View>
  );

  const submissionButton = () => {
    const b = (isSet
      ? (
        <CupertinoButtonGrey
          text="Save"
          style={styles.button}
          onPress={() => updateEditing(false)}
          testID="newFuseSaveButton"
        />
      ) : (
        <CupertinoButtonGrey
          text="Submit"
          style={styles.button}
          onPress={createEvent}
          testID="newFuseSubmitButton"
        />
      )
    );
    return b;
  };

  const ownerButtons = () => {
    const b = (isEditing ? (
      <View>
        {submissionButton()}
      </View>
    ) : (
      <View>
        <CupertinoButtonGrey
          text="Edit"
          style={styles.edit}
          onPress={() => updateEditing(true)}
          testID="newFuseEditButton"
        />
        <CupertinoButtonGrey
          style={styles.light}
          text="Light"
          onPress={() => navigation.navigate(screenIds.lightFuse)}
          testID="newFuseLightButton"
        />
      </View>
    ));
    return b;
  };

  return (
    <ImageBackground source={gradient} style={styles.trim}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.loremIpsum} onPress={navigation.goBack} testID="newFuseBackButton">&lt;</Text>
          <Text style={styles.set}>SET</Text>
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Name"
            onChangeText={setEventName}
            editable={isEditing}
            testID="newFuseEventNameField"
          />
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Description"
            onChangeText={setEventDescription}
            editable={isEditing}
            testID="newFuseEventDescriptionField"
          />
          <View style={{ top: 60 }} testID="newFuseFriendSelector">
            <Text>{friendList}</Text>
            {isEditing ? friendSelector() : null}
          </View>
          {isOwner ? notifSwitch() : null}
          <Text style={styles.deadline}>Deadline:</Text>
          <View style={styles.deadline}>
            <DatePicker
              style={{ width: 280 }}
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
                // ... You can check the source to find the other keys.
              }}
              onDateChange={setDate}
            />
          </View>
        </View>
        {isOwner ? ownerButtons() : null }
        <Image
          source={fuseLogo}
          resizeMode="contain"
          style={styles.image}
        />
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
