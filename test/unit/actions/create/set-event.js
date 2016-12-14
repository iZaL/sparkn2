import test from 'tape';
import * as create from '../../../../src/js/actions/create';
// import { ADD_INPUT, REMOVE_INPUT } from '../../../../src/js/actions/create';

// import { addInput, removeInput } from '../../../../src/js/actions/create';

test('`setDetails` creates the correct action', (t) => {

  const expected = {
    type: create.SET_DETAILS,
    data: 'someData',
    inputType: 'name'
  };
  const actual = create.setDetails('someData', 'name');

  t.deepEqual(actual, expected);
  t.end();
});

test('`setWhat` creates the correct action', (t) => {

  const expected = {
    type: create.SET_WHAT,
    data: 'someData',
    inputKey: 4
  };
  const actual = create.setWhat('someData', 4);

  t.deepEqual(actual, expected);
  t.end();
});

test('`setWhere` creates the correct action', (t) => {

  const expected = {
    type: create.SET_WHERE,
    data: 'someData',
    inputKey: 2
  };
  const actual = create.setWhere('someData', 2);

  t.deepEqual(actual, expected);
  t.end();
});
/*
test('setEventWhen creates the correct action', (t) => {

    const expected = {
        type: SET_EVENT_WHEN,
        data: "someData",
        inputKey: 4,
        eventType: "eventWhen",
        format: "timeOrDate"
    };
    const actual = setEventWhen("someData", 4, "timeOrDate");

    t.deepEqual(actual, expected);
    t.end();
});

test('addInput creates the correct action', (t) => {

    const expected = {
        type: ADD_INPUT,
        eventType: "theEventType",
        nextInputKey: 2
    };
    const actual = addInput(2, "theEventType");

    t.deepEqual(actual, expected);
    t.end();
});

test('removeInput creates the correct action', (t) => {

    const expected = {
        type: REMOVE_INPUT,
        inputKey: Infinity,
        eventType: "theEventType"
    };
    const actual = removeInput(Infinity, "theEventType");

    t.deepEqual(actual, expected);
    t.end();
});
*/
