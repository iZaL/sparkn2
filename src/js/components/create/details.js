import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Router from '../../router';
import EventDetailsHeader from '../general/event-details-header';
import Button from '../common/Button';
import styles from '../../style';

export default function Details ({ handleChange, title, eventDetails, navigator }) {

  const hideNext = eventDetails.eventName === '' || eventDetails.eventDescription === '';

  const nextPage = () => {
    navigator.push(Router.getRoute('what'));
  };

  return (
    <View>
      <EventDetailsHeader
        location={ title }
        eventName={ eventDetails.eventName }
        eventDescription={ eventDetails.eventDescription }
      />
      <View style={styles.container}>
        <Text>
          Enter the name of your event and a description.
        </Text>

        <View style={ styles.row }>
          <TextInput
            style={ styles.inputStyle }
            handleChange={ () => { handleChange('eventName'); }}
            value={ eventDetails ? eventDetails.eventName : '' }
            type="text"
            placeholder="Event name"
          />
        </View>
        <View style={ styles.row }>
          <TextInput
            style={ styles.inputStyle }
            handleChange={ () => { handleChange('eventDescription'); }}
            value={ eventDetails ? eventDetails.eventDescription : '' }
            type="text"
            placeholder="Event description"
          />
        </View>
        <View style={ styles.row }>
          <TextInput
            style={ styles.inputStyle }
            handleChange={ () => { handleChange('eventNote'); }}
            value={ eventDetails ? eventDetails.eventNote : '' }
            placeholder="Leave a note to your friends (optional)"
          />
        </View>
        <View style={styles.row}>
          { (hideNext) &&
            <View />
          }
          { (!hideNext) &&
            <Button
              onPress={ () => nextPage() }
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
            >
              Next
            </Button>
          }
        </View>
      </View>
    </View>
  );
}
