import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';

import styles from './styles/EditProfileDetailsScreenStyles';

export const editProfileHeaderOptions = {
  headerShown: true,
  headerTitle: 'Edit Profile Details',
};

// eslint-disable-next-line no-unused-vars
export default function EditProfileDetailsScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.fieldWrapper}>
        <View style={styles.fieldLabelWrapper}>
          <Text style={styles.fieldLabel}>Name</Text>
        </View>
        <View style={styles.fieldInputWrapper}>
          <MaterialUnderlineTextbox
            placeholder="test"
            // onChangeText={(text) => {console.log(text)}}
            style={styles.fieldInput}
          />
        </View>
      </View>
      <View style={styles.fieldWrapper}>
        <View style={styles.fieldLabelWrapper}>
          <Text style={styles.fieldLabel}>Bio</Text>
        </View>
        <View style={styles.fieldInputWrapper}>
          <MaterialUnderlineTextbox
            placeholder="test"
            // onChangeText={(text) => {console.log(text)}}
            style={styles.fieldInput}
          />
        </View>
      </View>
    </View>
  );
}

EditProfileDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
