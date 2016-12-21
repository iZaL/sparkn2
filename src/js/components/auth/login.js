import React from 'react';
import { TextInput, View } from 'react-native';
import Button from '../common/Button';
import styles from '../../../styles';

export default function Login () {

  return (
    <View style={{ marginTop: 50 }}>

      <View style={ styles.row }>
        <TextInput
          style={ styles.inputStyle }
          onChangeText={ text => console.log(text) }
          value={ 'text' }
          type="text"
        />
      </View>

      <View style={ styles.row }>
        <TextInput
          style={ styles.inputStyle }
          onChangeText={ text => console.log(text) }
          value={ 'text' }
          type="password"
          secureTextEntry
        />
      </View>

      <Button textStyle={ styles.buttonTextStyle } buttonStyle={ styles.buttonStyle }>
        Login
      </Button>
    </View>
  );
}
