import { connect } from 'react-redux';
import { setEventWhen, addInput, removeInput, clearCreateEvent } from '../../actions/create';
import When from '../../components/create/when';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = state => ({ // eslint-disable-line no-unused-vars
  eventWhenData: jsonState.createEvent.eventWhen,
  eventDetails: jsonState.createEvent.eventDetails
});

const mapDispatchToProps = dispatch => ({

  handleDate: (inputKey, event) => {
    dispatch(setEventWhen(event.target.value, inputKey, 'date'));
  },

  handleTime: (inputKey, event) => {
    dispatch(setEventWhen(event.target.value, inputKey, 'time'));
  },

  addInput: (nextInputKey) => {
    dispatch(addInput(nextInputKey, 'eventWhen'));
  },

  removeInput: (lastInputKey) => {
    dispatch(removeInput(lastInputKey, 'eventWhen'));
  },

  discardEvent: () => {
    dispatch(clearCreateEvent());
  }
});

const WhenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(When);

export default WhenContainer;
