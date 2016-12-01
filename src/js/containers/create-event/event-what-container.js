import React from 'react';
import { connect } from 'react-redux';
import { setEventWhat, addInput, removeInput, clearCreateEvent } from '../../actions/create-event.js';
import EventWhat from '../../components/create-event/event-what.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {
    let data = jsonState.createEvent.eventWhat;
    return {
        eventWhatData: data,
        eventDetails: jsonState.createEvent.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhat: (inputKey, event) => {
            dispatch(setEventWhat(event.target.value, inputKey));
        },

        addInput: (nextInputKey) => {
            dispatch(addInput(nextInputKey, "eventWhat"));
        },

        removeInput: (inputIndex) => {
            dispatch(removeInput(inputIndex, "eventWhat"));
        },

        discardEvent: () => {
            dispatch(clearCreateEvent());
        }
    };
};

const EventWhatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhat);

export default EventWhatContainer;
