import axios from 'axios';
// import getUserID from '../lib/getUserID';

export const SET_EVENT_DETAILS = 'SET_EVENT_DETAILS';
export const SET_EVENT_WHAT = 'SET_EVENT_WHAT';
export const SET_EVENT_WHERE = 'SET_EVENT_WHERE';
export const SET_EVENT_WHEN = 'SET_EVENT_WHEN';

export const SAVE_EVENT = 'SAVE_EVENT';
export const SAVE_EVENT_REQUEST = 'SAVE_EVENT_REQUEST';
export const SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS';
export const SAVE_EVENT_FAILURE = 'SAVE_EVENT_FAILURE';
export const CLEAR_CREATE_EVENT = 'CLEAR_CREATE_EVENT';

export const ADD_INPUT = 'ADD_INPUT';
export const REMOVE_INPUT = 'REMOVE_INPUT';

export const ADD_INVITEE = 'ADD_INVITEE';
export const REMOVE_INVITEE = 'REMOVE_INVITEE';

export const HYDRATE_CREATE_EVENT = 'HYDRATE_CREATE_EVENT';

/********
SET EVENT ACTIONS
********/

export function setEventDetails (data, inputType) {
  return {
    type: SET_EVENT_DETAILS,
    data,
    inputType,
    eventType: 'details'
  };
}

export function setEventWhat (data, inputKey) {
  return {
    type: SET_EVENT_WHAT,
    data,
    inputKey,
    eventType: 'what'
  };
}

export function setEventWhere (data, inputKey) {
  return {
    type: SET_EVENT_WHERE,
    data,
    inputKey,
    eventType: 'where'
  };
}

export function setEventWhen (data, inputKey, format) {
  return {
    type: SET_EVENT_WHEN,
    data,
    inputKey,
    eventType: 'when',
    format
  };
}

/********
* SAVE EVENT ACTIONS
********/

export function saveEvent (eventData) {
  return function (dispatch) {
    dispatch(saveEventRequest());

    return axios.post('http://localhost:3000/events', eventData)
      .then(() => {
        dispatch(saveEventSuccess());
        dispatch(clearCreateEvent());
      })
      .catch((error) => {
        dispatch(saveEventFailure(error));
      });
  };
}

export function saveEventRequest () {
  return {
    type: SAVE_EVENT_REQUEST,
    isFetching: true
  };
}

export function saveEventSuccess () {
  return {
    type: SAVE_EVENT_SUCCESS,
    isFetching: false,
    didSave: true
  };
}

export function saveEventFailure (error) {
  return {
    type: SAVE_EVENT_FAILURE,
    isFetching: false,
    error,
    didSave: false
  };
}

export function clearCreateEvent () {
  return {
    type: CLEAR_CREATE_EVENT
  };
}

/********
* INPUT ACTIONS
********/

export function addInput (nextInputKey, eventType) {
  return {
    type: ADD_INPUT,
    nextInputKey,
    eventType
  };
}

export function removeInput (inputKey, eventType) {
  return {
    type: REMOVE_INPUT,
    inputKey,
    eventType
  };
}

/********
* INVITEE ACTIONS
********/

export function addInvitee (friend, index) {
  return {
    type: ADD_INVITEE,
    data: friend,
    index
  };
}

export function removeInvitee (invitee, index) {
  return {
    type: REMOVE_INVITEE,
    data: invitee,
    index
  };
}

/********
* HYDRATE EDIT EVENT ACTIONS
********/

export function hydrateCreateEvent (event) {
  return {
    type: HYDRATE_CREATE_EVENT,
    data: event
  };
}
