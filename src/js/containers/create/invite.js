import { connect } from 'react-redux';
import { toggleSelectedInvitee, clearCreateEvent } from '../../actions/create';
import Invite from '../../components/create/invite';

const mapStateToProps = ({ create }) => {
  return {
    name: create.name,
    description: create.description,
    _invitees: create._invitees
  };
};

const mapDispatchToProps = dispatch => ({

  toggleContact: (index) => {
    dispatch(toggleSelectedInvitee(index));
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
