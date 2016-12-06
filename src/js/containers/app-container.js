import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = state => ({

  error: state.user.error || state.auth.error || state.createEvent.error || state.event.error
});

const mapDispatchToProps = () => ({

  login: () => {
    // dispatch(userLogin());
  }
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
