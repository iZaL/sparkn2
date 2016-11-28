import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
import styles from '../style';
//import Banner from './general/banner.js';

class Login extends Component {

    render () {
          return (

                      <View style={styles.row}>
                          <Text style={styles.textSnippet}>
                              The easy way to organise parties, events, share pictures and memories with friends, family and groups.
                          </Text>
                      </View>

          );
    }
}


export default Login;
