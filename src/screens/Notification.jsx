import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ScrollView, Text,
} from 'react-native';
// eslint-disable-next-line import/no-named-as-default
import RegularNotification from '../components/notification/RegularNotification';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247,243,243,1)',
  },
});

const notificationTypes = {
  FOLLOWED: 'followed',
  JOINED: 'joined',
  LIT: 'lit',
  COMPLETED: 'completed',
  FRIEND: 'friend',
};

const sampleUserImage = require('../assets/peter.png');
const sampleNotificationImage = require('../assets/images/hiking.jpg');

function Notifications() {
  const [notifications, setNotifications] = useState({
    notifications: [],
  });

  // eslint-disable-next-line no-unused-vars
  const getNotifications = async (userId) => {
    // backend query code to get notifications for user
    const fakeNotifications = [
      {
        user: 'ryan',
        type: notificationTypes.FOLLOWED,
        userImage: sampleUserImage,
        eventImage: sampleNotificationImage,
        id: '0',
      },
      {
        user: 'chiarabroo',
        type: notificationTypes.JOINED,
        userImage: sampleUserImage,
        eventImage: sampleNotificationImage,
        id: '1',
      },
      {
        user: 'charles',
        type: notificationTypes.FRIEND,
        userImage: sampleUserImage,
        eventImage: sampleNotificationImage,
        id: '2',
      },
    ];

    const parsedNotifications = fakeNotifications;
    const notificationList = [];

    parsedNotifications.forEach((element) => {
      notificationList.push(element);
    });

    setNotifications({
      notifications: notificationList,
    });
  };

  useEffect(() => {
    getNotifications();
  }, []);

  const showNotifications = () => {
    const notificationList = notifications.notifications;

    if (notificationList.length === 0) {
      return (
        <Text>There are no notifications</Text>
      );
    }

    return notificationList.map((notification) => (
      <RegularNotification
        user={notification.user}
        notificationType={notification.type}
        userImage={notification.userImage}
        notificationImage={notification.eventImage}
        key={notification.id}
      />
    ));
  };

  return (
    <ScrollView style={styles.container} testID="notificationScreen">
      {showNotifications()}
    </ScrollView>
  );
}

export default Notifications;
