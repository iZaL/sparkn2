import { connect } from 'react-redux';
import { setEventDetails, clearCreateEvent } from '../../actions/create-event';
import Details from '../../components/create/details';
// import jsonState from '../../testState/jsonStateCreate.json';

const mapStateToProps = ({ create }) => {
  return {
    name: create.name,
    description: create.description,
    note: create.note,
    title: 'A title'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (inputType, event) => {
      dispatch(setEventDetails(event.target.value, inputType));
    },
    discardEvent: () => {
      dispatch(clearCreateEvent());
    }
  };
};

const DetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);

export default DetailsContainer;
