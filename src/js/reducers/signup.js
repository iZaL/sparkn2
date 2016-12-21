import update from 'react-addons-update';
import * as actions from '../actions/signup';

export const initialState = {
  email: '',
  password: '',
  isSigningUp: false,
  error: undefined
};

export default function signup (state = initialState, action) {
  switch (action.type) {

    case actions.UPDATE_TEXT_INPUT:
      return update(state, {
        [action.inputType]: { $set: action.data }
      });

    case actions.SIGNUP_USER_REQUEST:
      return update(state, {
        isSigningUp: { $set: true }
      });

    case actions.SIGNUP_USER_SUCCESS:
      return initialState;

    case actions.SIGNUP_USER_FAILURE:
      return update(state, {
        isSigningUp: { $set: false },
        error: { $set: action.error },
        password: { $set: '' }
      });

    default:
      return state;
  }
}
