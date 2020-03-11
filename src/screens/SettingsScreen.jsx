import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { useApolloClient } from '@apollo/react-hooks';

import PropTypes from 'prop-types';
import screenIds from '../navigation/ScreenIds';

import styles from './styles/SettingsScreenStyles';

export const settingsHeaderOptions = {
  headerShown: true,
};


function SettingsTile({
  // eslint-disable-next-line no-unused-vars
  navigation, title, onPress, testID,
}) {
  return (
    <TouchableOpacity
      style={styles.tileWrapper}
      onPress={onPress}
      testID={testID}
    >
      <Text style={styles.tileText}>{title}</Text>
    </TouchableOpacity>
  );
}

// eslint-disable-next-line no-unused-vars
export default function SettingsScreen({ navigation }) {
  const client = useApolloClient();

  const onPressEditProfile = () => {
    navigation.navigate(screenIds.editProfile);
  };

  const onPressLogout = async () => {
    await AsyncStorage.clear();
    await client.clearStore();
  };

  return (
    <View style={styles.wrapper} testID="settingsScreen">
      <Text style={styles.sectionHeaderText}>ACCOUNT</Text>
      <SettingsTile
        title="Edit profile"
        onPress={onPressEditProfile}
        navigation={navigation}
        testID="settingsEditProfile"
      />
      <SettingsTile
        title="Logout"
        onPress={onPressLogout}
        navigation={navigation}
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
  testID: PropTypes.string.isRequired,
};

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
