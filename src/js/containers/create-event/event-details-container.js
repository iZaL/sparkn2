import React from 'react';
import { connect } from 'react-redux';
import { getFBFriends, setEventDetails, clearCreateEvent } from '../../actions/create-event.js';
import EventDetails from '../../components/create-event/event-details.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {
    let shouldGetFBFriends = jsonState.createEvent.invitees.length === 0 && jsonState.createEvent.friends.length === 0;
    return {
        eventDetails: jsonState.createEvent.eventDetails,
        shouldGetFBFriends
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleChange: (inputType, event) => {

            dispatch(setEventDetails(event.target.value, inputType));
        },
        getFBFriends: () => {
            dispatch(getFBFriends());
        },
        discardEvent: () => {
            dispatch(clearCreateEvent());
        }
    };
};

const EventDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
