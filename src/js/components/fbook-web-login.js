'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, WebView } from 'react-native';
import CookieManager from 'react-native-cookies';
import { Actions } from 'react-native-router-flux';
import styles from '../style';
import LoggedIn from './loggedin';
import { userLoginSuccess, getCookieSuccess } from '../actions/auth.js';

// Change these to reflect
const LOGIN_URL = 'http://localhost:9000/bell/door';
const HOME_URL = 'http://localhost:9000';

class ReactNativeLogin extends Component {
  constructor(props) {
    super(props);
    console.log({ props });

    this.state = {
      loggedIn: false,
      loadedCookie: false
    };
  }

  componentDidMount () {
    console.log('props = ' + this.props.sceneKey + 'DidMount');

    CookieManager.get(HOME_URL, (err, res) => {
      const cookie = JSON.stringify(res);
      console.log(cookie);
      console.log(cookie.includes("sparkID"));
      let isAuthenticated;
      // Test if cookie contains 'sparkID'
      if (cookie.includes("sparkID")) {
        this.props.loginSuccess();
        isAuthenticated = true;
        this.props.handleGetCookieSuccess(cookie);
        this.setState({
          loggedIn: isAuthenticated,
          loadedCookie: true
        });
        console.log('loggedIn' + this.state.loggedIn);
        console.log('loadedCookie' + this.state.loadedCookie);
      }
      else {
        isAuthenticated = false;
        this.setState({
          loggedIn: isAuthenticated,
          loadedCookie: true
        });
        console.log('loggedIn' + this.state.loggedIn);
        console.log('loadedCookie' + this.state.loadedCookie);
      }
    });
  }

  onNavigationStateChange (navState) {
    // If we get redirected back to the HOME_URL we know that we are logged in. If your backend does something different than this
    // change this line.
    console.log('navState=' + navState.url);
    if (navState.url == 'http://localhost:9000/#/feed') {
      this.setState({
        loggedIn: true,
      });
    }
    console.log('loggedIn' + this.state.loggedIn);
    console.log('loadedCookie' + this.state.loadedCookie);
  }

  render () {
    console.log('renderfacebooklogin');
    console.log('loggedIn' + this.state.loggedIn);
    console.log('loadedCookie' + this.state.loadedCookie);
    // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
    if (this.state.loadedCookie) {
      if (this.state.loggedIn) {
        console.log('Going to loggedin');

        return (
          <LoggedIn/>
        );
      }
      else {
        console.log('not logged in' + this.state);
        return (
          <View style={styles.webViewContainer}>
            <WebView
              ref={'webview'}
              automaticallyAdjustContentInsets={false}
              style={styles.webView}
              source={{uri: LOGIN_URL}}
              javaScriptEnabled={true}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
              startInLoadingState={true}
              scalesPageToFit={true}
            />
          </View>
        );
      }
    }
    else {
      console.log('didnt load cookie' + this.state);
      return (
        <View></View>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loginSuccess: () => {
            dispatch(userLoginSuccess());
        },
        handleGetCookieSuccess: (cookie) => {
            dispatch(getCookieSuccess(cookie));
        }
    };
};

const mapStateToProps = (state) => {
    console.log(state.auth);
    return {
        auth: state.auth
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactNativeLogin);
