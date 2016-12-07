import React from 'react';
import { connect } from 'react-redux';
import { newEvent, clearCreateEvent } from '../../actions/create-event.js';
import ConfirmNewEvent from '../../components/create-event/confirm-new-event.js';
import { isPoll, cleanEventData } from '../../lib/create-event-helpers.js';
import { store } from '../../init-store.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {
    const sortedDates = jsonState.createEvent.eventWhen.sort((a, b) => {

        return (a.date + a.time) > (b.date + b.time);
    });
    const data = {
        eventName: jsonState.createEvent.eventDetails.eventName,
        eventDescription: jsonState.createEvent.eventDetails.eventDescription,
        eventNote: jsonState.createEvent.eventDetails.eventNote,
        eventWhat: jsonState.createEvent.eventWhat,
        eventWhere: jsonState.createEvent.eventWhere,
        eventWhen: sortedDates,
        invitees: jsonState.createEvent.invitees
    };

    return {
        data: cleanEventData(data),
        eventDetails: jsonState.createEvent.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        saveEvent: (data) => {

            const state = store.getState();
            data.isPoll = isPoll(data);
            data.hostID = state.user.id;
            data.hostPhotoURL = state.user.photoURL;
            dispatch(newEvent(data));
        },
        discardEvent: () => {
            dispatch(clearCreateEvent());
        }
    };
};

const ConfirmNewEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmNewEvent);

export default ConfirmNewEventContainer;
