import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
import styles from '../style';
//import Banner from './general/banner.js';

class Login extends Component {

    constructor (props) {
        super(props);
        this.onLoginPress = this.onLoginPress.bind(this);
    }

    componentDidMount () {
        if (this.props.auth.isAuthenticated) {

            //Actions.feed({ type: 'reset' });
        }

    }

    onLoginPress () {
      Actions.tabbar();
    }

    render () {
        if (this.props.auth.isAuthenticated) {

          return (
            <View />
          )
        } else {

          return (
              <View>

                  <View style={styles.container}>
                      <View style={styles.row}>

                          <Image style={styles.logo} source={require('../../img/sparkLoginLogo.png')} />
                      </View>

                      <View style={styles.row}>
                          <Text style={styles.textSnippet}>
                              The easy way to organise parties, events, share pictures and memories with friends, family and groups.
                          </Text>
                      </View>

                      <View style={styles.row}>
                          <Button buttonStyle={[styles.buttonStyle, { backgroundColor: 'blue' }]} textStyle={[styles.buttonTextStyle, { color: 'white' }]} onPress={() => this.onLoginPress()} >
                            Login
                          </Button>
                      </View>

                  </View>

              </View>
          );
        }

    }
}

export default Login;
