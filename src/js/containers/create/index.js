import { connect } from 'react-redux';
import Create from '../../components/create';
import { clearCreateEvent } from '../../actions/create-event';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = state => ({ // eslint-disable-line no-unused-vars
  eventDetails: jsonState.createEvent.eventDetails
});

const mapDispatchToProps = dispatch => ({
  discardEvent: () => {
    dispatch(clearCreateEvent());
  }
});

const CreateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);

export default CreateContainer;
