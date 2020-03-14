import { PHOTO_BUCKET } from '../constants';

export function getUserProfileUrl(userId) {
  return `${PHOTO_BUCKET}/profiles/${userId}.jpg`;
}

export async function wait(delayMillis) {
  return new Promise((resolve) => setTimeout(resolve, delayMillis));
}
