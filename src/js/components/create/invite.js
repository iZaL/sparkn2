import React, { Component } from 'react';
import { View } from 'react-native';
import Router from '../../router';
import Button from '../common/Button';
import styles from '../../style';

export default class Invite extends Component { // eslint-disable-line react/prefer-stateless-function

  nextPage () {
    this.props.navigator.push(Router.getRoute('confirm'));
  }

  render () {
    return (
      <View>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={ () => this.nextPage() }
        >
          Next
        </Button>
      </View>
    );
  }
}
