import React from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';
import styles from '../style';

const Intro = () => {

  return (

    <View style={styles.container}>

      <View style={styles.row}>
        <Text style={styles.userName}> Main page </Text>
      </View>

      <View style={styles.row}>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
        >
          Login
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
        >
          Main App
        </Button>
      </View>

      <View style={styles.row}>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
        >
          Event Screens
        </Button>
      </View>

    </View>

  );
};

export default Intro;
