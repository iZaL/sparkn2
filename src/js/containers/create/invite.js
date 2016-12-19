import { connect } from 'react-redux';
import { addInvitee, removeInvitee, clearCreateEvent } from '../../actions/create';
import Invite from '../../components/create/invite';

const mapStateToProps = ({ create }) => {

  return {
    name: create.name,
    description: create.description,
    _invitees: create._invitees
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
