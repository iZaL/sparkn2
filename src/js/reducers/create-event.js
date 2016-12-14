import update from 'react-addons-update';
import { SET_EVENT_DETAILS, SET_EVENT_WHAT, SET_EVENT_WHERE, SET_EVENT_WHEN,
         ADD_INPUT, REMOVE_INPUT,
         SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE, CLEAR_CREATE_EVENT,
         ADD_INVITEE, REMOVE_INVITEE, HYDRATE_CREATE_EVENT } from '../actions/create-event';

const initialState = {
  name: '',
  description: '',
  note: '',
  _what: [],
  _where: [],
  _when: [],
  _invitees: [],
  is_poll: undefined,
  isFetching: false,
  error: undefined,
  didSave: undefined
};

export default function createEvent (state = initialState, action) {

  switch (action.type) {

    case SET_EVENT_DETAILS:
      return setEventDetails(state, action);

    case SET_EVENT_WHAT:
    case SET_EVENT_WHERE:
      return setEvent(state, action);

    case SET_EVENT_WHEN:
      return setEventWhen(state, action);

    case ADD_INPUT:
      return addInput(state, action);

    case REMOVE_INPUT:
      return removeInput(state, action);

    case SAVE_EVENT_REQUEST:
    case SAVE_EVENT_SUCCESS:
    case SAVE_EVENT_FAILURE:
      return handleSaveEvent(state, action);

    case CLEAR_CREATE_EVENT:
      return initialState;

    case ADD_INVITEE:
      return addInvitee(state, action);

    case REMOVE_INVITEE:
      return removeInvitee(state, action);

    case HYDRATE_CREATE_EVENT:
      return hydrateCreateEvent(state, action);

    default:
      return state;
  }
}


function handleSaveEvent (state, action) {

  return update(state, {
    isFetching: { $set: action.isFetching },
    didSave: { $set: action.didSave },
    error: { $set: action.error }
  });
}

function setEventDetails (state, action) {

  return update(state, {
    details: { [action.inputType]: { $set: action.data } }
  });
}

function setEvent (state, action) {

  const newState = update(state, {
    [action.eventType]: { $splice: [[action.inputKey, 1, action.data]] }
  });
  return newState;
}

function setEventWhen (state, action) {

  const oldValue = state.when[action.inputKey];
  const newValue = update(oldValue, {
    [action.format]: { $set: action.data }
  });
  const newState = update(state, {
    when: { $splice: [[action.inputKey, 1, newValue]] }
  });
  return newState;
}

function addInput (state, action) {

  let initialValue;

  if (action.eventType === 'when') {

    initialValue = {
      date: state.when[action.nextInputKey - 1].date,
      time: state.when[action.nextInputKey - 1].time
    };
  } else {
    initialValue = '';
  }

  const newState = update(state, {
    [action.eventType]: { $push: [initialValue] }
  });
  return newState;
}

function removeInput (state, action) {

  const newState = update(state, {
    [action.eventType]: { $splice: [[action.inputKey, 1]] }
  });
  return newState;
}

function addInvitee (state, action) {

  const newState = update(state, {
    invitees: { $push: [action.data] },
    friends: { $splice: [[action.index, 1]] }
  });
  return newState;
}

function removeInvitee (state, action) {

  const newState = update(state, {
    friends: { $push: [action.data] },
    invitees: { $splice: [[action.index, 1]] }
  });
  return newState;
}

function hydrateCreateEvent (state, action) {

  const eventDetails = {
    name: action.data.eventName,
    description: action.data.eventDescription,
    note: action.data.eventNote
  };

  const newState = update(state, {
    details: { $set: eventDetails },
    what: { $set: action.data.eventWhat },
    where: { $set: action.data.eventWhere },
    when: { $set: action.data.eventWhen }
  });
  return newState;
}
