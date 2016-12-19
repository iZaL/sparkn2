import test from 'tape';
import {
  TOGGLE_SELECTED_INVITEE,
  toggleSelectedInvitee
} from '../../../../src/js/actions/create';

test('toggleSelectedInvitee creates the correct action', (t) => {
  t.plan(1);
  const index = 6;
  const expected = {
    type: TOGGLE_SELECTED_INVITEE,
    index
  };
  const actual = toggleSelectedInvitee(index);

  t.deepEqual(actual, expected);
});
