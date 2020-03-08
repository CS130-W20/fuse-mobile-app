import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247,243,243,1)',
  },
  materialIconTextButtonsFooter1: {
    top: 40,
    width: 375,
    height: 103,
    position: 'absolute',
    left: 0,
  },
  materialButtonShare1: {
    top: 0,
    left: 159,
    width: 56,
    height: 56,
    position: 'absolute',
  },
  materialIconTextButtonsFooter1Stack: {
    width: 375,
    height: 143,
    marginTop: 689,
  },
  materialButtonTransparentHamburger1: {
    width: 40,
    height: 49,
    marginTop: 15,
  },
  fuse1: {
    top: 48,
    left: 0,
    color: 'rgba(237,92,69,1)',
    position: 'absolute',
    fontSize: 20,
    // fontFamily: "alata-regular",
    letterSpacing: 3,
  },
  image1: {
    top: 0,
    left: 46,
    width: 56,
    height: 62,
    position: 'absolute',
  },
  fuse1Stack: {
    width: 102,
    height: 68,
    marginLeft: 203,
  },
  materialButtonTransparentHamburger1Row: {
    height: 68,
    flexDirection: 'row',
    marginTop: -823,
    marginLeft: 20,
    marginRight: 10,
  },
  rect: {
    width: 375,
    height: 74,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 9,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.09,
    shadowRadius: 3,
    marginTop: 19,
  },
  loremIpsum: {
    width: 354,
    height: 44,
    color: 'rgba(98,98,98,1)',
    // fontFamily: "roboto-regular",
    marginTop: 16,
    marginLeft: 11,
  },
  rect1: {
    width: 375,
    height: 74,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 9,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.09,
    shadowRadius: 3,
    marginTop: 16,
  },
  loremIpsum1: {
    width: 354,
    height: 44,
    color: 'rgba(98,98,98,1)',
    // fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 11,
  },
  rect2: {
    width: 375,
    height: 74,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 9,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.09,
    shadowRadius: 3,
    marginTop: 16,
  },
  loremIpsum2: {
    width: 354,
    height: 44,
    color: 'rgba(98,98,98,1)',
    // fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 11,
  },
  rect3: {
    width: 375,
    height: 74,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 9,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.09,
    shadowRadius: 3,
    marginTop: 16,
  },
  loremIpsum3: {
    width: 354,
    height: 44,
    color: 'rgba(98,98,98,1)',
    // fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 12,
  },
  rect4: {
    width: 375,
    height: 74,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 9,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.09,
    shadowRadius: 3,
    marginTop: 16,
  },
  loremIpsum4: {
    width: 354,
    height: 44,
    color: 'rgba(98,98,98,1)',
    // fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 11,
  },
});

function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>
          Sample Notification Title
          {'\n'}
          {'\n'}
          Here is a blurb describing what the notification is about...
        </Text>
      </View>
      <View style={styles.rect1}>
        <Text style={styles.loremIpsum1}>
          Sample Notification Title
          {'\n'}
          {'\n'}
          Here is a blurb describing what the notification is about...
        </Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum2}>
          Sample Notification Title
          {'\n'}
          {'\n'}
          Here is a blurb describing what the notification is about...
        </Text>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.loremIpsum3}>
          Sample Notification Title
          {'\n'}
          {'\n'}
          Here is a blurb describing what the notification is about...
        </Text>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.loremIpsum4}>
          Sample Notification Title
          {'\n'}
          {'\n'}
          Here is a blurb describing what the notification is about...
        </Text>
      </View>
    </View>
  );
}

export default Notifications;
