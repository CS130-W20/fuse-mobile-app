import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import screenIds from '../navigation/ScreenIds';

import styles from './styles/SettingsScreenStyles';

export const settingsHeaderOptions = {
  headerShown: true,
};

// eslint-disable-next-line no-unused-vars
function SettingsTile({ navigation, title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.tileWrapper}
      onPress={onPress}
    >
      <Text style={styles.tileText}>{title}</Text>
    </TouchableOpacity>
  );
}

// eslint-disable-next-line no-unused-vars
export default function SettingsScreen({ navigation }) {
  const onPressEditProfile = () => {
    navigation.navigate(screenIds.editProfile);
  };

  const onPressLogout = () => {
  };

  return (
    <View style={styles.wrapper} testID="settingsScreen">
      <Text style={styles.sectionHeaderText}>ACCOUNT</Text>
      <SettingsTile
        title="Edit profile"
        onPress={onPressEditProfile}
      />
      <SettingsTile
        title="Logout"
        onPress={onPressLogout}
      />
    </View>
  );
}

SettingsTile.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
