import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from '../containers/login-container.js';
import { store } from '../init-store.js';
import { getUser } from '../actions/user.js';
import styles from '../style.js';

export default class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  componentWillMount () {

        console.log('LoggedInWillMount and Actions.Feed being called');

        console.log('gettingUserID');
        // const userIDD = store.getState().user.id;
        // console.log(userIDD);
          console.log(!store.getState().user.id);
          if (!store.getState().user.id) {
              store.dispatch(getUser());
          }
        Actions.feed({ type: 'reset' });

  }

  componentDidMount () {
        console.log('componentDidMount');
  }

  render () {
    console.log('LoggedInDidRender');
    console.log(this.state.loggedIn);
    if (this.state.loggedIn) {

     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           You are authenticated!
         </Text>

       </View>
     );

    }
    else {
      console.log('LoggedInFailed')
      return (
        <Login />
      );
    }

  }
}
