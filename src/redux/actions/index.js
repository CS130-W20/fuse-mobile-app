export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const RESTORE_TOKEN = 'RESTORE_TOKEN';

export function signIn() {
  return (dispatch) => {
    // make api call to get the auth token
    dispatch({ type: SIGN_IN, token: 'dummytoken' });
  };
}

export function restoreToken() {
  return (dispatch) => {
    // get the auth token from storage?
    dispatch({ type: RESTORE_TOKEN, token: 'dummytoken' });
  };
}
