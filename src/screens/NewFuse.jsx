/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View, Text, Image, Switch, ImageBackground, ScrollView, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Feather } from '@expo/vector-icons';

import Multiselect from '../components/fields/Multiselect';
import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import { CREATE_EVENT_MUTATION } from '../graphql/GeneralQueries';
import screenIds from '../navigation/ScreenIds';
import colors from '../styles/colors/index';
import FuseSubmitButton from '../components/FuseSubmitButton';
import styles from './styles/NewFuseStyles';

const gradient = require('../../src/assets/images/Gradient_LIswryi.png');

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

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
  return 'No Friend Invited';
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
  const [friendList, friendListChange] = useState('No Friends Invited');

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
      <Text style={{ color: colors.black, fontSize: 16 }}>Send Notifications?</Text>
      <Switch
        disabled={false}
        trackColor={{ true: colors.grey }}
        onValueChange={setNotifications}
        value={notifications}
      />
    </View>
  );

  const submissionButton = () => {
    const b = (isSet
      ? (
        <FuseSubmitButton
          buttonName="SAVE"
          style={styles.button}
          onPress={() => updateEditing(false)}
          testID="newFuseSaveButton"
        />
      ) : (
        <FuseSubmitButton
          buttonName="SUBMIT"
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
        <FuseSubmitButton
          text="Edit"
          style={styles.edit}
          onPress={() => updateEditing(true)}
          testID="newFuseEditButton"
        />
        <FuseSubmitButton
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
        <View style={styles.upperheader}>
          <View style={styles.leftHeaderWrapper}>
            <Feather
              name="chevron-left"
              style={styles.back}
              onPress={navigation.goBack}
              testID="newFuseBackButton"
            />
          </View>
          <View style={styles.centerHeaderWrapper}>
            <Text style={styles.set}>SET</Text>
          </View>
          <View style={styles.rightHeaderWrapper} />
          <View style={styles.backWrapper} />
        </View>
        <View style={styles.middleHeader}>
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
          <View testID="newFuseFriendSelector">
            {isEditing ? friendSelector() : (
              <Text>
                Invited Friends:
                {'\n'}
              </Text>
            )}
            <Text style={styles.nameInput}>{friendList}</Text>
          </View>
          {isOwner ? notifSwitch() : null}
          <View style={styles.deadline}>
            <DatePicker
              style={{ width: 280, alignSelf: 'center' }}
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
            <DateTimePickerModal
              isVisible={datePicker}
              mode="date"
              onConfirm={dateConfirm}
              onCancel={() => toggleDatePicker(false)}
            />
          </View>
        </View>
        <View style={styles.lowerHeader}>
          {isOwner ? ownerButtons() : null }
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
