import React, { useState } from 'react';
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
};

const sampleUserImage = require('../assets/peter.png');
const sampleNotificationImage = require('../assets/images/hiking.jpg');

function Notifications() {
  const [notifications, setNotifications] = useState({
    notifications: [],
  });

  const notificationDataParser = (query) => (
    query.map((notification) => (
      {
        user: notification.user,
        type: notification.notificationType,
        userImage: notification.userImage,
        eventImage: notification.notificationImage,
      }
    ))
  );

  // eslint-disable-next-line no-unused-vars
  const getNotifications = async (userId) => {
    // backend query code to get notifications for user
    const fakeNotifications = [
      {
        user: 'ryan',
        notificationType: notificationTypes.FOLLOWED,
        userImage: sampleUserImage,
        notificationImage: sampleNotificationImage,
      },
      {
        user: 'chiarabroo',
        notificationType: notificationTypes.JOINED,
        userImage: sampleUserImage,
        notificationImage: sampleNotificationImage,
      },
      {
        user: 'charles',
        notificationType: notificationTypes.LIT,
        userImage: sampleUserImage,
        notificationImage: sampleNotificationImage,
      },
    ];

    const parsedNotifications = notificationDataParser(fakeNotifications);
    const notificationList = [];

    parsedNotifications.forEach((element) => {
      notificationList.push(element);
    });

    setNotifications({
      notifications: notificationList,
    });
  };

  const showNotifications = () => {
    getNotifications('');

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
      />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {showNotifications()}
    </ScrollView>
  );
}

export default Notifications;
