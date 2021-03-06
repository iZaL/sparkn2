import update from 'react-addons-update';
import { SET_DETAILS, SET_WHAT, SET_WHERE, SET_WHEN,
         ADD_INPUT, REMOVE_INPUT,
         SET_CONTACTS, TOGGLE_SELECTED_INVITEE,
         SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE, CLEAR_CREATE_EVENT,
         HYDRATE_CREATE_EVENT } from '../actions/create';

export const initialState = {
  name: '',
  description: '',
  note: '',
  _what: [''],
  _where: [''],
  _when: [
    { date: new Date(), time: new Date() }
  ],
  _invitees: [],
  is_poll: undefined,
  isFetching: false,
  error: undefined,
  didSave: undefined
};

export default function create (state = initialState, action) {

  switch (action.type) {

    case SET_DETAILS:
      return setDetails(state, action);

    case SET_WHAT:
      return update(state, {
        _what: { $splice: [[action.inputKey, 1, action.data]] }
      });

    case SET_WHERE:
      return update(state, {
        _where: { $splice: [[action.inputKey, 1, action.data]] }
      });

    case SET_WHEN:
      return setWhen(state, action);

    case ADD_INPUT:
      return addInput(state, action);

    case REMOVE_INPUT:
      return update(state, {
        [action.eventType]: { $splice: [[action.inputKey, 1]] }
      });

    case SET_CONTACTS:
      return {
        ...state,
        _invitees: [
          ...action.data
        ]
      };


    case TOGGLE_SELECTED_INVITEE: // eslint-disable-line no-case-declarations
      const newObj = state._invitees[action.index];
      newObj.isSelected = !state._invitees[action.index].isSelected;
      return update(state, {
        _invitees: { $splice: [[action.index, 1, newObj]] }
      });

    case SAVE_EVENT_REQUEST:
    case SAVE_EVENT_SUCCESS:
    case SAVE_EVENT_FAILURE:
      return handleSaveEvent(state, action);

    case CLEAR_CREATE_EVENT:
      return initialState;

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

function setDetails (state, action) {
  return update(state, {
    [action.inputType]: { $set: action.data }
  });
}

function setWhen (state, action) {

  const oldValue = state._when[action.inputKey];
  const newValue = update(oldValue, {
    [action.format]: { $set: action.data }
  });
  return update(state, {
    _when: { $splice: [[action.inputKey, 1, newValue]] }
  });
}

function addInput (state, action) {
  let initialValue;

  if (action.eventType === '_when') {

    initialValue = {
      date: state._when[action.nextInputKey - 1].date,
      time: state._when[action.nextInputKey - 1].time
    };
  } else {
    initialValue = '';
  }
  const newState = update(state, {
    [action.eventType]: { $push: [initialValue] }
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
