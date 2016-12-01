import React from 'react';
import { connect } from 'react-redux';
import { setEventWhen, addInput, removeInput, clearCreateEvent } from '../../actions/create-event.js';
import EventWhen from '../../components/create-event/event-when.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {

    let data = jsonState.createEvent.eventWhen;
    return {
        eventWhenData: data,
        eventDetails: jsonState.createEvent.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleDate: (inputKey, event) => {

            dispatch(setEventWhen(event.target.value, inputKey, "date"));
        },

        handleTime: (inputKey, event) => {

            dispatch(setEventWhen(event.target.value, inputKey, "time"));
        },

        addInput: (nextInputKey) => {
            dispatch(addInput(nextInputKey, "eventWhen"));
        },

        removeInput: (lastInputKey) => {
            dispatch(removeInput(lastInputKey, "eventWhen"));
        },

        discardEvent: () => {
            dispatch(clearCreateEvent());
        }
    };
};

const EventWhenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhen);

export default EventWhenContainer;
