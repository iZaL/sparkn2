'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ReactNativeLogin from './fbook-web-login';
//import { store } from '../init-store.js';
//import { getUser } from '../actions/user.js';

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

          if (!store.getState().user.id) {

              store.dispatch(getUser());

          }

        Actions.feed();

  }

  render () {
    console.log('LoggedInDidRender');
    console.log(this.state.loggedIn);
    if (this.state.loggedIn) {
      console.log('renderLoggedIn');
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
        <ReactNativeLogin />
      );
    }

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
