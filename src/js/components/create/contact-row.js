import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default function ContactRow ({ givenName, familyName, phoneNumber }) {
  const number = phoneNumber[0].number;
  return (
    <View>
      <TouchableHighlight
        onPress={ () => console.log('---') }
      >
        <Text>{givenName} {familyName} {number}</Text>
      </TouchableHighlight>
    </View>
  );
}
