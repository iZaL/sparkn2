import React from 'react';
import { connect } from 'react-redux';
import { addInvitee, removeInvitee, clearCreateEvent } from '../../actions/create-event.js';
import InviteFriends from '../../components/create-event/invite-friends.js';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => {

    let friends = jsonState.createEvent.friends;
    let invitees = jsonState.createEvent.invitees;

    return {
        friends: friends,
        invitees: invitees,
        eventDetails: jsonState.createEvent.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleSelected: (id, index) => {
            dispatch(addInvitee(id, index));
        },

        removeSelected: (id, index) => {
            dispatch(removeInvitee(id, index));
        },

        discardEvent: () => {
            dispatch(clearCreateEvent());
        }
    };
};


const InviteFriendsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);

export default InviteFriendsContainer;
