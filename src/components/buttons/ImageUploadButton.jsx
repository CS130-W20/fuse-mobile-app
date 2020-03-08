import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import Constants from 'expo-constants';
import { askAsync, CAMERA_ROLL } from 'expo-permissions';
import { RNS3 } from 'react-native-aws3';
import { ACCESS_KEY, SECRET_KEY } from 'react-native-dotenv';

import styles from '../styles/NewFuseButtonStyles';

async function getPermissionAsync(setPhotoAccess) {
  if (Constants.platform.ios) {
    const { status } = await askAsync(CAMERA_ROLL);
    if (status === 'granted') {
      setPhotoAccess(true);
    }
  }
}

async function uploadPhoto(photoAccess, setImageUri) {
  if (!photoAccess) {
    // eslint-disable-next-line no-alert
    alert('We need access to photos to enable photo upload.');
    return;
  }

  const result = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.cancelled) {
    setImageUri(result.uri);
  }
}

async function uploadToS3(imageUri, name) {
  const file = {
    uri: imageUri,
    name,
    type: 'image/jpeg',
  };

  const options = {
    keyPrefix: 'photos/tests/',
    bucket: 'fuse-photo-bucket',
    region: 'us-west-2',
    successActionStatus: 201,
    accessKey: ACCESS_KEY,
    secretKey: SECRET_KEY,
  };

  RNS3.put(file, options)
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Failed to upload image to S3');
      }
      // eslint-disable-next-line no-console
      console.log(response.body);
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
}

export default function ImageUploadButton() {
  const [photoAccess, setPhotoAccess] = useState(false);
  const [triedToUpload, setTriedToUpload] = useState(0);
  const [imageUri, setImageUri] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imageName, setImageName] = useState('test-photo.jpg');

  useEffect(() => {
    getPermissionAsync(setPhotoAccess);
  }, [triedToUpload]);

  useEffect(() => {
    if (imageUri) {
      uploadToS3(imageUri, imageName);
    }
  }, [imageUri]);

  return (
    <TouchableOpacity
      style={styles.imageUploadWrapper}
      onPress={() => {
        uploadPhoto(photoAccess, setImageUri);
        setTriedToUpload(triedToUpload + 1);
      }}
    >
      <Feather name="plus" style={styles.newFuseIcon} />
    </TouchableOpacity>
  );
}
