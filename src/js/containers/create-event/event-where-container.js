import React from 'react';
import { connect } from 'react-redux';
import { setEventWhere, addInput, removeInput, clearCreateEvent } from '../../actions/create-event.js';
import EventWhere from '../../components/create-event/event-where.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {
    let data = jsonState.createEvent.eventWhere;
    return {
        eventWhereData: data,
        eventDetails: jsonState.createEvent.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhere: (inputKey, placeName, placeAddress) => {

            let address = {
                placeName: placeName,
                placeAddress: placeAddress || ""
            };
            dispatch(setEventWhere(address, inputKey));
        },

        addInput: (nextInputKey) => {
            dispatch(addInput(nextInputKey, "eventWhere"));
        },

        removeInput: (lastInputKey) => {
            dispatch(removeInput(lastInputKey, "eventWhere"));
        },

        discardEvent: () => {
            dispatch(clearCreateEvent());
        }
    };
};

const EventWhereContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhere);

export default EventWhereContainer;
