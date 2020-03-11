import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import {
  USER_PROFILE_DETAILS_QUERY,
  PROFILE_DETAILS_MUTATION,
  USER_QUERY,
} from '../graphql/GeneralQueries';
import MaterialUnderlineTextbox from '../components/fields/MaterialUnderlineTextbox';
import Spacer from '../helpers/Spacer';

import styles from './styles/EditProfileDetailsScreenStyles';
import screenIds from '../navigation/ScreenIds';

export const editProfileHeaderOptions = {
  headerShown: true,
  headerTitle: 'Edit Profile Details',
};

// eslint-disable-next-line no-unused-vars
export default function EditProfileDetailsScreen({ navigation, testID }) {
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);

  const client = useApolloClient();
  const { me: currentUser } = client.readQuery({ query: USER_QUERY });

  const {
    data: detailsQueryData,
    loading: detailsQueryLoading,
    // eslint-disable-next-line no-unused-vars
    error: detailsQueryError,
  } = useQuery(USER_PROFILE_DETAILS_QUERY, {
    variables: {
      id: currentUser.id,
    },
  });

  const [
    detailsMutation,
  ] = useMutation(PROFILE_DETAILS_MUTATION);

  useEffect(() => {
    if (detailsQueryData && !detailsQueryLoading) {
      setName(detailsQueryData.user.name);
      setBio(detailsQueryData.user.bio);
    }
  }, [detailsQueryData, detailsQueryLoading]);

  const onPressSave = () => {
    detailsMutation({
      variables: { name, bio },
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    }).then(() => {
      // eslint-disable-next-line no-console
      console.log('Updated details!');
      navigation.navigate(screenIds.myProfile);
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.fieldWrapper}>
        <View style={styles.fieldLabelWrapper}>
          <Text style={styles.fieldLabel} testID="editProfileScreen">Name</Text>
        </View>
        <View style={styles.fieldInputWrapper}>
          <MaterialUnderlineTextbox
            placeholder="Name"
            onChangeText={(text) => { setName(text); }}
            value={name}
            style={styles.fieldInput}
            multiline
            testID="editProfileName"
          />
        </View>
      </View>
      <View style={styles.fieldWrapper}>
        <View style={styles.fieldLabelWrapper}>
          <Text style={styles.fieldLabel}>Bio</Text>
        </View>
        <View style={styles.fieldInputWrapper}>
          <MaterialUnderlineTextbox
            placeholder="Bio"
            onChangeText={(text) => { setBio(text); }}
            value={bio}
            style={styles.fieldInput}
            multiline
            testID="editProfileBio"
          />
        </View>
      </View>
      <Spacer padding={20} />
      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={onPressSave}
          testID="editProfileSaveButton"
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

EditProfileDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  testID: PropTypes.string.isRequired,
};
