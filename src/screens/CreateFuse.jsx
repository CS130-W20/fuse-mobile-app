import React, { useState, useEffect } from 'react';
import {
  View, Text, Switch, ImageBackground, Dimensions, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/react-hooks';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Feather } from '@expo/vector-icons';

import UserList from '../components/UserList';
import Multiselect from '../components/fields/Multiselect';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import { GET_SELF_FRIENDS, CREATE_EVENT_MUTATION } from '../graphql/GeneralQueries';
import screenIds from '../navigation/ScreenIds';
import colors from '../styles/colors/index';
import FuseSubmitButton from '../components/FuseSubmitButton';
import styles from './styles/NewFuseStyles';

const gradient = require('../../src/assets/images/Gradient_LIswryi.png');

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

const friendIdLookup = {};

export default function CreateFuse({ navigation }) {
  const isOwner = true;
  const currDate = 'March 8, 2020';

  // eslint-disable-next-line no-unused-vars
  const [isEditing, updateEditing] = useState(isOwner);

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [datePicker, toggleDatePicker] = useState(false);
  const [date, setDate] = useState(currDate);
  const [selectedFriendIds, onSelectedFriendsChange] = useState([]);
  const [notifications, setNotifications] = useState(false);
  const [friends, setFriends] = useState([]);

  const [createEventMutation] = useMutation(CREATE_EVENT_MUTATION);

  const {
    data: friendsQueryData,
    loading: friendsQueryLoading,
    // refetch: refetchFriendsQuery,
  } = useQuery(GET_SELF_FRIENDS);

  useEffect(() => {
    if (friendsQueryData && !friendsQueryLoading) {
      const parsedFriends = friendsQueryData.me.friends.map((friendObj) => ({
        id: friendObj.friend.id,
        title: friendObj.friend.name,
      }));
      setFriends(parsedFriends);

      if (parsedFriends) {
        parsedFriends.forEach((friend) => {
          friendIdLookup[friend.id] = friend.title;
        });
      }
      // console.log(friendIdLookup);
    }
  }, [
    friendsQueryData, friendsQueryLoading,
  ]);

  const getUserListFriendMap = () => (
    selectedFriendIds.map((id) => ({
      id,
      name: friendIdLookup[id],
    }))
  );

  const createEvent = async () => {
    await createEventMutation({
      variables: {
        title: eventName,
        description: eventDescription,
        invitees: selectedFriendIds,
      },
    });
  };

  const friendSelector = () => (
    <Multiselect
      itemlist={friends}
      selectedItems={selectedFriendIds}
      onSelectedItemsChange={onSelectedFriendsChange}
      // confirmFunc={onFriendSelectionConfirm}
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

  const onPressSubmit = async () => {
    await createEvent();
    navigation.navigate(screenIds.newsFeed);
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
          {/* <View style={styles.backWrapper} /> */}
        </View>
        <ScrollView style={styles.scrollView}>
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

            {/* Show friend selector if allowed to edit, otherwise just show
            invited friends */}
            <View testID="newFuseFriendSelector">
              {
                isEditing
                  ? friendSelector()
                  : (
                    <Text>
                      Invited Friends:
                      {'\n'}
                    </Text>
                  )
              }
              {/* <Text style={styles.nameInput}>{friendListText()}</Text> */}
            </View>
            <View style={styles.friendListWrapper}>
              <UserList userMap={getUserListFriendMap()} navigation={navigation} />
            </View>

            {isOwner ? notifSwitch() : null}

            <View>
              <View style={styles.deadlineWrapper}>
                <Text style={styles.deadline}>Set a Deadline: </Text>
                <Text style={styles.dateWrapper} onPress={pressDate}>
                  {date}
                </Text>
              </View>
              <DateTimePickerModal
                isVisible={datePicker}
                mode="date"
                onConfirm={dateConfirm}
                onCancel={() => toggleDatePicker(false)}
              />
            </View>
          </View>
          <View style={styles.lowerHeader}>
            <FuseSubmitButton
              buttonName="SUBMIT"
              style={styles.button}
              onPress={async () => onPressSubmit()}
              testID="newFuseSubmitButton"
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

CreateFuse.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
