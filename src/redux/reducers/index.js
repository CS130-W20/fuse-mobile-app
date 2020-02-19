import { combineReducers } from 'redux';

// TODO auth reducer
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from '../actions';

const initialAuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
