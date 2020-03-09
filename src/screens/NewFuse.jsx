/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, Switch, ImageBackground, ScrollView, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Multiselect from '../components/fields/Multiselect';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import { CREATE_EVENT_MUTATION } from '../graphql/GeneralQueries';
import screenIds from '../navigation/ScreenIds';

const gradient = require('../../src/assets/images/Gradient_LIswryi.png');

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
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
    flexDirection: 'column',
  },
  container2: {
    margin: '5%',
    height: '100%',
    flex: 1,
    paddingBottom: 100,
  },
  container3: {
    height: 600,
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
    alignSelf: 'center',
    position: 'absolute',
    // fontFamily: "alata-regular"
  },
  nameInput: {
    height: 80,
    top: 10,
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
  friendContainer: {
    top: 20,
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'rgba(220,220,230,1)',
    width: '95%',
  },
  switch: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    top: 80,
    height: 50,
    position: 'relative',
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'rgba(220,220,230,1)',
  },
  deadline: {
    position: 'relative',
    top: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  dateBox: {
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgba(220,220,230,1)',
    fontSize: 15,
    padding: 10,
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
      if (str.length > 2) {
        return `${str.join(', ')}\nand more...`;
      }
    }
  }
  if (str.length > 0) {
    return str.join(', ');
  }
  return 'No friends invited yet.';
};

export default function NewFuse({ navigation }) {
  const isOwner = true;
  const currDate = 'March 8, 2020';

  const [isSet, updateSet] = useState(false);
  const [isEditing, updateEditing] = useState(isOwner);

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [datePicker, toggleDatePicker] = useState(false);
  const [date, setDate] = useState(currDate);
  const [selectedItems, onSelectedItemsChange] = useState([]);
  const [notifications, setNotifications] = useState(false);
  const [friendList, friendListChange] = useState('No friends invited');

  const [createEventMutation] = useMutation(CREATE_EVENT_MUTATION);

  const onConfirm = () => {
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

  const friendSelector = () => (
    <Multiselect
      itemlist={itemlist}
      selectedItems={selectedItems}
      onSelectedItemsChange={onSelectedItemsChange}
      confirmFunc={onConfirm}
    />
  );

  const notifSwitch = () => (
    <View style={styles.switch}>
      <Text style={{ color: 'rgba(129,129,129,1)' }}>Send Notifications?</Text>
      <Switch
        trackColor={{ true: 'green' }}
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

  const dateConfirm = (dateIn) => {
    const options = {
      weekday: 'long',
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    };
    const d = new Intl.DateTimeFormat('en-US', options).format(dateIn);
    setDate(d);
    toggleDatePicker(false);
  };

  const pressDate = () => {
    if (isEditing) {
      if (isPortrait()) {
        toggleDatePicker(true);
      }
    }
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
        <ScrollView style={styles.container2} contentContainerStyle={styles.container3}>
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
            multiline
            testID="newFuseEventDescriptionField"
          />
          <View style={styles.friendContainer} testID="newFuseFriendSelector">
            {isEditing ? friendSelector() : (
              <Text>
                Invited Friends:
                {'\n'}
              </Text>
            )}
            <Text>{friendList}</Text>
          </View>
          {isOwner ? notifSwitch() : null}
          <View style={styles.deadline}>
            <Text>Set a deadline: </Text>
            <Text style={styles.dateBox} onPress={pressDate}>
              {date}
            </Text>
          </View>
          <View>
            <DateTimePickerModal
              isVisible={datePicker}
              mode="date"
              onConfirm={dateConfirm}
              onCancel={() => toggleDatePicker(false)}
            />
          </View>
        </ScrollView>
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
