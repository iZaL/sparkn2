import { connect } from 'react-redux';
import { addInvitee, removeInvitee, clearCreateEvent } from '../../actions/create';
import Invite from '../../components/create/invite';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = (state) => { // eslint-disable-line no-unused-vars

  const friends = jsonState.createEvent.friends;
  const invitees = jsonState.createEvent.invitees;

  return {
    friends,
    invitees,
    eventDetails: jsonState.createEvent.eventDetails
  };
};

const mapDispatchToProps = dispatch => ({
  handleSelected: (id, index) => {
    dispatch(addInvitee(id, index));
  },

  removeSelected: (id, index) => {
    dispatch(removeInvitee(id, index));
  },

  discardEvent: () => {
    dispatch(clearCreateEvent());
  }
});


const InviteFriendsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Invite);

export default InviteFriendsContainer;
