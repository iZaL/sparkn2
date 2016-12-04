import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
import styles from '../style.js';

const Intro = () => {

    return (


          <View style={styles.container}>

              <View style={styles.row}>
                  <Text style={styles.userName}> Main page </Text>
              </View>


              <View style={styles.row}>
                  <Button buttonStyle={styles.buttonStyle} textStyle={styles.buttonTextStyle} onPress={ () => Actions.login() } >
                      Login
                  </Button>
              </View>
              <View style={styles.row}>
                  <Button buttonStyle={styles.buttonStyle} textStyle={styles.buttonTextStyle} onPress={ () => Actions.tabbar() } >
                      Main App
                  </Button>
              </View>

              <View style={styles.row}>
                  <Button buttonStyle={styles.buttonStyle} textStyle={styles.buttonTextStyle} onPress={ () => Actions.event() } >
                      Event Screens
                  </Button>
              </View>

          </View>

    );
};

export default Intro;
