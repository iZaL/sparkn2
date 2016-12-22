import test from 'tape';
import reducer, { initialState } from '../../../../src/js/reducers/create';
import { contacts as data } from '../../../utils/fixtures';


test('Reducer handles SET_CONTACTS as expected', (t) => {
  t.plan(1);

  const action = {
    type: 'SET_CONTACTS',
    data
  };
  const nextState = reducer(initialState, action);
  const expected = Object.assign({},
    initialState,
    { _invitees: data }
  );

  t.deepEqual(nextState, expected, 'SET_CONTACTS sets state correctly');
});
