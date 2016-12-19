import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
/* eslint-disable camelcase */

export default function ContactRow (props) {
  const { firstname, surname, phone_number } = props.data;
  const { toggleContact, rowID } = props;

  return (
    <View style={{ backgroundColor: 'aliceblue' }}>
      <TouchableHighlight
        onPress={ () => toggleContact(rowID) }
      >
        <Text>{firstname} {surname} {phone_number}</Text>
      </TouchableHighlight>
    </View>
  );
}
