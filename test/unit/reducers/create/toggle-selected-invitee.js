import test from 'tape';
import { create as reducer, initialState } from '../../../../src/js/reducers/create';
import { contacts as data, contactsSelected } from '../../../utils/fixtures';


test.only('Reducer handles TOGGLE_SELECTED_INVITEE as expected', (t) => {
  t.plan(1);

  const action = {
    type: 'TOGGLE_SELECTED_INVITEE',
    index: 1
  };
  const state = Object.assign({}, initialState, { _invitees: data });
  const nextState = reducer(state, action);
  const expected = Object.assign({}, initialState, { _invitees: contactsSelected });

  t.deepEqual(nextState, expected, 'TOGGLE_SELECTED_INVITEE sets isSelected to true');
});

test('Reducer handles TOGGLE_SELECTED_INVITEE as expected', (t) => {
  t.plan(1);

  const action = {
    type: 'TOGGLE_SELECTED_INVITEE',
    index: 1
  };
  const state = Object.assign({}, initialState, { _invitees: contactsSelected });
  const nextState = reducer(state, action);
  const expected = Object.assign({}, initialState, { _invitees: data });

  t.deepEqual(nextState, expected, 'TOGGLE_SELECTED_INVITEE sets isSelected to false');
});
