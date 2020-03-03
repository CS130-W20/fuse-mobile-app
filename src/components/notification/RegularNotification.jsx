import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import { PropTypes } from 'prop-types';


const styles = StyleSheet.create({
  eventContainer: {
    flex: 1,
    height: 70,
    width: 75,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImage: {
    width: 60,
    height: 60,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 74,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  profileImageContainer: {
    width: 75,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 70,
  },
  message: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
    marginRight: 5,
  },
  messageBox: {
    flex: 3,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  user: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    height: 70,
    width: 75,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: 'rgba(63,114,155,1)',
    padding: 5,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 4,
  },
  rejectButton: {
    backgroundColor: 'rgba(237,92,69,1)',
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
  },
});

function RegularNotification({
  user, notificationType, userImage, notificationImage,
}) {
  let notificationText = '';

  switch (notificationType) {
    case 'followed':
      notificationText = 'has followed you bro';
      break;
    case 'joined':
      notificationText = 'has joined your super cool event man good stuff';
      break;
    case 'lit':
      notificationText = 'has set an event to the lit stage';
      break;
    case 'completed':
      notificationText = 'has set an event to the completed stage';
      break;
    case 'friend':
      notificationText = 'is requesting to be your friend';
      break;
    default:
      notificationText = 'is showing you the default notification';
      break;
  }
  if (notificationType === 'followed' || notificationType === 'joined' || notificationType === 'lit' || notificationType === 'completed') {
    return (
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image source={userImage} style={styles.profileImage} />
        </View>
        <View style={styles.messageBox}>
          <Text style={styles.message}>
            <Text style={styles.user}>{user}</Text>
            {' '}
            {notificationText}
          </Text>
        </View>
        <View style={styles.eventContainer}>
          <Image source={notificationImage} style={styles.eventImage} />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={notificationImage} style={styles.profileImage} />
      </View>
      <View style={styles.messageBox}>
        <Text style={styles.message}>
          <Text style={styles.user}>{user}</Text>
          {' '}
          {notificationText}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>ACCEPT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.buttonText}>REJECT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

RegularNotification.propTypes = {
  // eslint-disable-next-line react/require-default-props
  notificationType: PropTypes.oneOf(['followed', 'joined', 'lit', 'completed', 'friend']),
  user: PropTypes.string.isRequired,
  userImage: PropTypes.node.isRequired,
  notificationImage: PropTypes.node.isRequired,
};

export default RegularNotification;
