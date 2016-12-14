import { connect } from 'react-redux';
import { setWhen, addInput, removeInput, clearCreateEvent } from '../../actions/create';
import When from '../../components/create/when';

const mapStateToProps = ({ create }) => {
  console.log(create._when);
  return {
    data: create._when,
    name: create.name,
    description: create.description
  };
};

const mapDispatchToProps = dispatch => ({

  handleDate: (date, inputKey) => {
    dispatch(setWhen(date, inputKey, 'date'));
  },

  handleTime: (inputKey, event) => {
    dispatch(setWhen(event.target.value, inputKey, 'time'));
  },

  addInput: (nextInputKey) => {
    console.log("add input", nextInputKey);
    dispatch(addInput(nextInputKey, '_when'));
  },

  removeInput: (lastInputKey) => {
    dispatch(removeInput(lastInputKey, '_when'));
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
