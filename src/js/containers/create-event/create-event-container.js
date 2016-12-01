import React from 'react';
import { connect } from 'react-redux';
import CreateEvent from '../../components/create-event/create-event.js';
import { clearCreateEvent } from '../../actions/create-event.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {

    return {
        eventDetails: jsonState.createEvent.eventDetails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        discardEvent: () => {
            dispatch(clearCreateEvent());

        }
    };
};

const CreateEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEvent);

export default CreateEventContainer;
