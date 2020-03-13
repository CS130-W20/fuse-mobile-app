import { PHOTO_BUCKET } from '../constants';

export default function getUserProfileUrl(userId) {
  return `${PHOTO_BUCKET}/profiles/${userId}.jpg`;
}
