import test from 'tape';
import { SET_CONTACTS, setContacts } from '../../../../src/js/actions/create';
import { contacts as data } from '../../../utils/fixtures';

test('`setContacts` creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: SET_CONTACTS,
    data
  };
  const actual = setContacts(data);

  t.deepEqual(actual, expected);
});
