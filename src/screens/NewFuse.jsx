import React, { PureComponent } from 'react';
//  import { Text, View } from 'react-native';
import {
  StyleSheet, View, Text, Image, Switch, TextInput, Button,
} from 'react-native';
/*  import Light from "../components/Light";
import WhitePanel from "../components/WhitePanel";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
*/

const styles = StyleSheet.create({
  trim: {
    backgroundColor: '#ed5c45',
    flex: 1,
    margin: 0,
  },
  container: {
    flex: 1,
    margin: '5%',
    backgroundColor: 'white',
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
    top: 601,
    left: 260,
    width: 88,
    height: 78,
    position: 'absolute',
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
    top: 80,
    height: 30,
    position: 'relative',
  },
  deadline: {
    flexDirection: 'row',
    width: '95%',
    top: 130,
    height: 50,
    position: 'relative',
  },
  button: {
    width: '75%',
    top: 280,
    position: 'relative',
    alignSelf: 'center',
  },
});


export default class NewFuse extends PureComponent {
  render() {
    return (
      <View style={styles.trim}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.loremIpsum}>&lt;</Text>
            <Text style={styles.set}>SET</Text>
            <TextInput
              style={styles.nameInput}
              placeholder="Event Name"
            />
            <TextInput
              style={styles.nameInput}
              placeholder="Event Description"
            />
            <TextInput
              style={styles.nameInput}
              placeholder="Event Invite Group"
            />
            <View style={styles.switch}>
              <Text>Send Notifications?</Text>
              <Switch
                disabled={false}
                trackColor={{ true: 'rgba(230, 230, 230,1)' }}
              />
            </View>
            <View style={styles.deadline}>
              <Image
                source="../../assets/icon.png"
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <TextInput
                placeholder="Event Deadline"
                style={{ height: 40, left: 40 }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Submit"
                color="#ed5c45"
              />
            </View>
            <Image
              source="../../assets/icon.png"
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
      </View>
    );
  }
}
