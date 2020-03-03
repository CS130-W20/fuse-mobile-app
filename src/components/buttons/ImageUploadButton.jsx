import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import Constants from 'expo-constants';
import { askAsync, CAMERA_ROLL } from 'expo-permissions';

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
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImageUri(result.uri);
  }
}


export default function ImageUploadButton() {
  const [photoAccess, setPhotoAccess] = useState(false);
  const [triedToUpload, setTriedToUpload] = useState(0);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    getPermissionAsync(setPhotoAccess);
  }, [triedToUpload]);

  console.log(imageUri);

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
