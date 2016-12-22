export const UPDATE_TEXT_INPUT = 'UPDATE_TEXT_INPUT';
export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const updateTextInput = (data, inputType) => ({
  type: UPDATE_TEXT_INPUT,
  data,
  inputType
});

export const signupUserRequest = () => ({
  type: SIGNUP_USER_REQUEST
});

export const signupUserSuccess = data => ({
  type: SIGNUP_USER_SUCCESS,
  data
});

export const signupUserFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  error
});


export function signupUser (email, password) { //eslint-disable-line

  return (dispatch) => {
    dispatch(signupUserRequest());
  };
}
