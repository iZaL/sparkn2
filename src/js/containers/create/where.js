import { connect } from 'react-redux';
import { setEventWhere, addInput, removeInput, clearCreateEvent } from '../../actions/create';
import Where from '../../components/create/where';
import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = state => ({ // eslint-disable-line no-unused-vars
  eventWhereData: jsonState.createEvent.eventWhere,
  eventDetails: jsonState.createEvent.eventDetails
});

const mapDispatchToProps = dispatch => ({

  handleEventWhere: (inputKey, placeName, placeAddress) => {
    const address = {
      placeName,
      placeAddress: placeAddress || ''
    };
    dispatch(setEventWhere(address, inputKey));
  },

  addInput: (nextInputKey) => {
    dispatch(addInput(nextInputKey, 'eventWhere'));
  },

  removeInput: (lastInputKey) => {
    dispatch(removeInput(lastInputKey, 'eventWhere'));
  },

  discardEvent: () => {
    dispatch(clearCreateEvent());
  }
});

const WhereContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Where);

export default WhereContainer;
