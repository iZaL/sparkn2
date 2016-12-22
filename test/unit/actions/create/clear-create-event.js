import test from 'tape';
import { CLEAR_CREATE_EVENT } from '../../../../src/js/actions/create';
import { clearCreateEvent } from '../../../../src/js/actions/create';

test('clearCreateEvent returns expected action', (t) => {

  let actual = clearCreateEvent();
  const expected = {
    type: CLEAR_CREATE_EVENT
  };
  t.deepEqual(actual, expected, "clearCreateEvent returns the CLEAR_CREATE_EVENT action");
  t.end();
});
