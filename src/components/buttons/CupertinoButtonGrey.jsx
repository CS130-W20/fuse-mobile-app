import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8E8E93',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 17,
    // fontFamily: "roboto-500"
  },
});

// class CupertinoButtonGrey extends Component {
//   constructor({ style, text, onPress }) {
//     super({ style, text, onPress });
//     this.state = {
//       style,
//       text,
//       onPress,
//     };
//   }
//
//   render() {
//     const { style, text, onPress } = this.state;
//     return (
//       <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
//         <Text style={styles.caption}>{text}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

function CupertinoButtonGrey({ style, text, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.caption}>{text}</Text>
    </TouchableOpacity>
  );
}

CupertinoButtonGrey.defaultProps = {
  style: styles,
  text: 'button',
  onPress: () => { console.log('button pressed'); },
};

CupertinoButtonGrey.propTypes = {
  style: ViewPropTypes.style,
  text: PropTypes.string,
  onPress: PropTypes.func,
};


export default CupertinoButtonGrey;
