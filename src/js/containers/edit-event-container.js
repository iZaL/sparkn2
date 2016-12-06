import { connect } from 'react-redux';
import EditEvent from '../components/event/edit-event';
import { setEventDetails, setEventWhat, setEventWhere, setEventWhen, clearCreateEvent } from '../actions/create-event';
import { saveEditedEvent } from '../actions/event';
import jsonState from '../testState/jsonStateEvent.json';


const mapStateToProps = () => {
  return {
    event: jsonState.event.data,
    eventDetails: jsonState.createEvent.eventDetails,
    eventWhat: jsonState.createEvent.eventWhat,
    eventWhere: jsonState.createEvent.eventWhere,
    eventWhen: jsonState.createEvent.eventWhen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    handleChange: (inputType, event) => {

      dispatch(setEventDetails(event.target.value, inputType));
    },

    handleEventWhat: (inputKey, event) => {
      dispatch(setEventWhat(event.target.value, inputKey));
    },

    handleEventWhere: (inputKey, placeName, placeAddress) => {

      const address = {
        placeName,
        placeAddress
      };
      dispatch(setEventWhere(address, inputKey));
    },

    handleDate: (inputKey, event) => {

      dispatch(setEventWhen(event.target.value, inputKey, 'date'));
    },

    handleTime: (inputKey, event) => {

      dispatch(setEventWhen(event.target.value, inputKey, 'time'));
    },

    handleSaveEditedEvent: (eventName, eventDescription, eventNote, eventWhat, eventWhere, eventWhen, eventID) => {

      dispatch(saveEditedEvent(eventName, eventDescription, eventNote, [eventWhat], [eventWhere], [eventWhen], eventID));
    },

    discardEvent: () => {
      dispatch(clearCreateEvent());
    }

  };
};

const EditEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEvent);

export default EditEventContainer;
