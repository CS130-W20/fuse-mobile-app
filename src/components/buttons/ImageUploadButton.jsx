import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import Constants from 'expo-constants';
import { askAsync, CAMERA_ROLL } from 'expo-permissions';
import { RNS3 } from 'react-native-aws3';

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
    alert('We need access to photos to enable photo upload.');
    return;
  }

  const result = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImageUri(result.uri);
  }
}

async function uploadToS3(imageUri) {
  const file = {
    uri: imageUri,
    name: 'test-photo.jpg',
    type: 'image/jpeg',
  };

  const options = {
    keyPrefix: 'photos/tests/',
    bucket: 'fuse-image-bucket',
    region: 'us-west-2',
    successActionStatus: 201,
    accessKey: 'AKIATNII2GEYJ3AWI6GM',
    secretKey: '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',
  };

  RNS3.put(file, options)
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Failed to upload image to S3');
      }
      console.log(response.body);
    })
    .catch((err) => console.error(err));
}

export default function ImageUploadButton() {
  const [photoAccess, setPhotoAccess] = useState(false);
  const [triedToUpload, setTriedToUpload] = useState(0);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    getPermissionAsync(setPhotoAccess);
  }, [triedToUpload]);

  console.log(imageUri);

  useEffect(() => {
    if (imageUri) {
      uploadToS3(imageUri);
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
