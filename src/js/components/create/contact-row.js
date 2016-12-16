import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default function ContactRow (props) {
  const { givenName, familyName, phoneNumber } = props.data;
  const number = phoneNumber[0].number;
  return (
    <View style={{ backgroundColor: 'aliceblue' }}>
      <TouchableHighlight
        onPress={ () => console.log('---') }
      >
        <Text>{givenName} {familyName} {number}</Text>
      </TouchableHighlight>
    </View>
  );
}
