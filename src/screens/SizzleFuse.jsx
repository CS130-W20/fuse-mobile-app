import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, ImageBackground, Modal,
} from 'react-native';
import PropTypes from 'prop-types';

import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';

const gradient = require('../../src/assets/images/completeombre.png');


const styles = StyleSheet.create({
  trim: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
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
  sizzle: {
    color: 'rgba(218,209,209,1)',
    fontSize: 30,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
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
  nameInput: {
    height: 80,
    top: 40,
    width: '95%',
    position: 'relative',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
  },
  image: {
    bottom: 38,
    left: '85%',
    width: 88,
    height: 78,
    position: 'relative',
    transform: [
      {
        rotate: '15.00deg',
      },
    ],
  },
  deadline: {
    flexDirection: 'row',
    width: '95%',
    top: 100,
    height: 50,
    position: 'relative',
  },
  button: {
    width: '80%',
    height: 50,
    top: 5,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(247,177,33,1)',
  },
  modal: {
    top: '30%',
    height: 300,
    width: '85%',
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    top: 20,
    position: 'relative',
    color: 'rgba(129,129,129,1)',
  },
});

const fuseLogo = require('../../src/assets/images/logo-fuse1.png');


export default function SizzleFuse({ navigation }) {
  const isOwner = true;
  const [isEditing, toggleIsEditing] = useState(isOwner);
  const [popup, togglePopUp] = useState(false);
  const title = 'Event Name';
  const description = 'Insert random text about event right here.\n This is super fun!\nBlah blah blah blah blah blah blah,\n';
  const [numPhotos] = useState(0);

  const complete = () => {
    toggleIsEditing(false);
    togglePopUp(true);
  };

  const buttons = () => (
    <View>
      <CupertinoButtonGrey
        text="Complete"
        style={styles.button}
        onPress={complete}
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
        <View style={styles.container2}>
          <Text style={styles.loremIpsum} onPress={navigation.goBack}>&lt;</Text>
          <Text style={styles.sizzle}>SIZZLE</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Photos"
          />
          <MaterialUnderlineTextbox
            style={styles.nameInput}
            placeholder="Event Memories"
          />
          <Modal
            animationType="slide"
            visible={popup}
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
                  <Text style={styles.modalText}>
                    {`You've earned \n${(numPhotos + 5)}\npoints!`}
                  </Text>
                  <View style={
                    {
                      position: 'absolute',
                      top: 150,
                      width: 200,
                      alignSelf: 'center',
                    }
                  }
                  >
                    <CupertinoButtonGrey
                      text="Accept"
                      style={styles.button}
                      onPress={() => togglePopUp(false)}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </Modal>
        </View>
        {isEditing ? buttons() : null}
      </View>
    </ImageBackground>
  );
}

SizzleFuse.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
