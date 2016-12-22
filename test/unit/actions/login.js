import test from 'tape';
import * as actions from '../../../src/js/actions/login';

test('updateTextInput creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.UPDATE_TEXT_INPUT,
    data: 'michael@jackson.com',
    inputType: 'email'
  };
  const actual = actions.updateTextInput('michael@jackson.com', 'email');
  t.deepEqual(actual, expected);
});

test('updatePassword creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.UPDATE_TEXT_INPUT,
    data: 'testpassword',
    inputType: 'password'
  };
  const actual = actions.updateTextInput('testpassword', 'password');
  t.deepEqual(actual, expected);
});

test.skip('authenticateUser async action creator returns expected action', (t) => {
  t.plan(1);

  let actual;
  // const { dispatch, queue } = createThunk();
  // dispatch(actions.authenticateUser());

  // [{ ...actual }] = queue;

  const expected = {
    type: actions.AUTHENTICATE_USER_REQUEST
  };
  t.deepEqual(actual, expected);
});

test('authenticateUserRequest creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.AUTHENTICATE_USER_REQUEST
  };

  const actual = actions.authenticateUserRequest();
  t.deepEqual(actual, expected);
});

test('authenticateUserSuccess creates the correct action', (t) => {
  t.plan(1);

  const data = true;
  const expected = {
    type: actions.AUTHENTICATE_USER_SUCCESS,
    data
  };

  const actual = actions.authenticateUserSuccess(data);
  t.deepEqual(actual, expected);
});

test('authenticateUserFailure creates the correct action', (t) => {
  t.plan(1);

  const error = new Error();
  const expected = {
    type: actions.AUTHENTICATE_USER_FAILURE,
    error
  };
  const actual = actions.authenticateUserFailure(error);
  t.deepEqual(actual, expected);
});

test('logout creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.LOGOUT
  };

  const actual = actions.logout();
  t.deepEqual(actual, expected);
});
