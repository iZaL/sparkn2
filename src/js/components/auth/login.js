import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Router from '../../router';
import Button from '../common/Button';
import styles from '../../../styles';


export default function Login ({ navigator }) {

  const goToNavbar = () => {
    navigator.push(Router.getRoute('navbar'));
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ paddingLeft: 5 }}>Email</Text>
      <View style={ styles.row }>
        <TextInput
          style={ styles.inputStyle }
          onChangeText={ text => console.log(text) }
          value={ 'text' }
          type="text"
        />
      </View>

      <Text style={{ paddingLeft: 5 }}>Password</Text>
      <View style={ styles.row }>
        <TextInput
          style={ styles.inputStyle }
          onChangeText={ text => console.log(text) }
          value={ 'text' }
          type="password"
          secureTextEntry
        />
      </View>

      <Button textStyle={ styles.buttonTextStyle } buttonStyle={ styles.buttonStyle } onPress={ goToNavbar }>
        Login
      </Button>
    </View>
  );
}
