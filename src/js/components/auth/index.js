import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../common/Button';
import styles from '../../../styles';

export default function Index () {

  return (
    <View>
      <View style={ styles.row }>
        <Image style={ styles.logo } source={ require('../../../img/sparkLoginLogo.png') } />
      </View>
      <View style={ styles.row }>
        <Text style={ styles.textSnippet }>
          The easy way to organise parties, events,
          share pictures and memories with friends, family and groups.
        </Text>
      </View>
      <Button buttonStyle={ styles.buttonStyle } textStyle={ styles.buttonTextStyle }>
        Login
      </Button>
      <Button buttonStyle={ styles.buttonStyle } textStyle={ styles.buttonTextStyle }>
        Sign up
      </Button>
    </View>
  );
}
