import { connect } from 'react-redux';
import { setEventWhat, addInput, removeInput, clearCreateEvent } from '../../actions/create-event';
import What from '../../components/create/what';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => { // eslint-disable-line no-unused-vars
  const data = jsonState.createEvent.eventWhat;
  return {
    eventWhatData: data,
    eventDetails: jsonState.createEvent.eventDetails
  };
};

const mapDispatchToProps = dispatch => ({

  handleEventWhat: (inputKey, event) => {
    dispatch(setEventWhat(event.target.value, inputKey));
  },

  addInput: (nextInputKey) => {
    dispatch(addInput(nextInputKey, 'eventWhat'));
  },

  removeInput: (inputIndex) => {
    dispatch(removeInput(inputIndex, 'eventWhat'));
  },

  discardEvent: () => {
    dispatch(clearCreateEvent());
  }
});

const WhatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(What);

export default WhatContainer;
