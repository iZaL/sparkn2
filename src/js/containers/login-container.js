import { connect } from 'react-redux';
import { userLogin } from '../actions/auth';
import Login from '../components/login';
import jsonState from '../testState/jsonState.json';

const mapStateToProps = () => {

  return {
    auth: jsonState.auth
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    login: () => {
      dispatch(userLogin());
    }
  };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;
