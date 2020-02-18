import React from 'react';
import {
  StyleSheet, View, Image, Text,
} from 'react-native';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  container: {},
  image1: {
    top: 0,
    left: 76,
    width: 198,
    height: 177,
    position: 'absolute',
  },
  fuse1: {
    top: 141,
    left: 0,
    color: 'rgba(237,92,69,1)',
    position: 'absolute',
    fontSize: 50,
    // fontFamily: "alata-regular",
    letterSpacing: 3,
  },
  image1Stack: {
    width: 274,
    height: 191,
  },
});

const sampleImage = require('../../assets/images/logo-fuse1.png');

function Logo(props) {
  const { style } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.image1Stack}>
        <Image
          source={sampleImage}
          resizeMode="contain"
          style={styles.image1}
        />
        <Text style={styles.fuse1}>FUSE</Text>
      </View>
    </View>
  );
}

Logo.propTypes = {
  style: PropTypes.objectOf(PropTypes.object()),
};

Logo.defaultProps = {
  style: {},
};

export default Logo;
