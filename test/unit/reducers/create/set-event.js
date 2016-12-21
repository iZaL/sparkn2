import test from 'tape';
import reducer, { initialState as state } from '../../../../src/js/reducers/create';


test('Reducer handles SET_DETAILS as expected', (t) => {
  const initialState = {
    name: 'Sohil Bowling'
  };
  const action = {
    type: 'SET_DETAILS',
    data: 'We\'re going bowling!!!',
    inputType: 'description'
  };
  const nextState = reducer(initialState, action);
  const expected = Object.assign({}, initialState, { description: "We're going bowling!!!" });

  t.deepEqual(nextState, expected, "'description' set correctly");
  t.end();
});

test('Reducer handles SET_WHAT as expected', (t) => {

  const initialState = {
    name: 'Sohil Bowling',
    description: 'Bowling',
    _what: ['']
  };

  const action = {
    type: 'SET_WHAT',
    data: 'sohil',
    inputKey: 0
  };

  const nextState = reducer(initialState, action);

  const expected = Object.assign({}, initialState, { _what: ['sohil'] });
  t.deepEqual(nextState, expected, "'what' set correctly");
  t.end();
});

test('Reducer handles SET_WHAT as expected', (t) => {

  const initialState = {
    name: 'Event',
    description: 'A cool event',
    _what: ['sohil1']
  };

  const action = {
    type: 'SET_WHAT',
    data: 'sohil2',
    inputKey: 1
  };

  const nextState = reducer(initialState, action);

  const expected = Object.assign({}, initialState, { _what: ['sohil1', 'sohil2'] });
  t.deepEqual(nextState, expected, "'what' set correctly");
  t.end();
});

test('SET_WHERE behaves as expected', (t) => {

  const initialState = {
    name: 'Sohil Bowling',
    description: 'Bowling',
    _what: [
      'Bowling',
      'Swimming'
    ],
    _where: ['']
  };

  const action = {
    type: 'SET_WHERE',
    data: 'Founders & Coders',
    inputKey: 0
  };

  const nextState = reducer(initialState, action);

  const expected = {
    name: 'Sohil Bowling',
    description: 'Bowling',
    _what: [
      'Bowling',
      'Swimming'
    ],
    _where: ['Founders & Coders']
  };

  t.deepEqual(nextState, expected, "'where' set correctly");
  t.end();
});

test('SET_WHEN behaves as expected', (t) => {

  const initialState = state;
  const initialTime = initialState._when[0].time;
  const now = new Date();
  const action = {
    type: 'SET_WHEN',
    data: now,
    eventType: '_when',
    inputKey: 0,
    format: 'date'
  };

  const nextState = reducer(initialState, action);

  const expected = Object.assign({}, initialState, { _when: [{ date: now, time: initialTime }] });

  t.deepEqual(nextState, expected, "'when' date set correctly");
  t.end();
});

test('SET_WHEN behaves as expected', (t) => {

  const initialState = state;
  const initialDate = initialState._when[0].date;
  const now = new Date();
  const action = {
    type: 'SET_WHEN',
    data: now,
    eventType: '_when',
    inputKey: 0,
    format: 'time'
  };

  const nextState = reducer(initialState, action);

  const expected = Object.assign({}, initialState, { _when: [{ date: initialDate, time: now }] });

  t.deepEqual(nextState, expected, "'when' time set correctly");
  t.end();
});
