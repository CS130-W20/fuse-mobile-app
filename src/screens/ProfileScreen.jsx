import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';

import { USER_QUERY } from '../graphql/GeneralQueries';
import { ProfileParams } from '../constants';
import ProfileContainer from '../containers/ProfileContainer';
import styles from './styles/ProfileScreenStyles';

export const profileHeaderOptions = {
  headerShown: false,
};

export default function ProfileScreen({ navigation, route }) {
  let profileId;
  const client = useApolloClient();
  const parentNavigator = navigation.dangerouslyGetParent();
  let showBackButton = false;

  if (
    parentNavigator
    && parentNavigator.dangerouslyGetState()
    && parentNavigator.dangerouslyGetState().routeNames
  ) {
    const { me: currentUser } = client.readQuery({ query: USER_QUERY });
    profileId = currentUser.id;
    // console.log("opened via tab navigator");
  } else {
    profileId = route.params[ProfileParams.profileId];
    showBackButton = true;
    // console.log("Opened via some random way", profileId);
  }

  return (
    <View style={styles.wrapper}>
      <ProfileContainer
        navigation={navigation}
        profileId={profileId}
        showBackButton={showBackButton}
      />
    </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dangerouslyGetParent: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }).isRequired,
};
