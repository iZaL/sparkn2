import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DateTimeInput from '../general/date-time-input';
import AddInput from '../general/add-input';
import EventDetailsHeader from '../general/event-details-header';
import TopBar from '../event/top-bar';
import Button from '../common/Button';
import styles from '../../style';

const EventWhen = ({ eventDetails, eventWhenData, addInput, removeInput, handleDate, handleTime }) => {

  const inputs = eventWhenData.map((value, i) => {
    return (
      <DateTimeInput
        inputCount={ eventWhenData.length }
        value={ value }
        key={ i }
        inputKey={ i }
        handleTime={ handleTime }
        handleDate={ handleDate }
        removeInput={ removeInput }
      />);
  });

  const hideAddInput = eventWhenData.length >= 3;

  const hideNext = eventWhenData[0].date === '';

  return (

    <View>
      <TopBar location="eventdetails/when" />
      <View style={styles.rowEventDetailsHeader}>

        <EventDetailsHeader
          location="Enter details"
          eventName={ eventDetails.eventName }
          eventDescription={ eventDetails.eventDescription }
        />

      </View>
      <View style={styles.container}>

        <Text style={styles.smallMessageText}>
          Enter a date and a time for your event (or leave them blank to decide later).
        </Text>
        <Text style={styles.smallMessageText}>
          You can add more than one option to create a poll.
        </Text>
      </View>
      <View style={styles.whenContainer}>
        { inputs }

        <AddInput data={ eventWhenData } handler={ addInput } />
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          { (hideNext) &&
            <View />
          }
          { (!hideNext) &&
            <Button
              buttonStyle={styles.buttonStyle}
              onPress={Actions.inviteFriends}
            >
              Next
            </Button>
          }
        </View>
      </View>
      
    </View>
  );
};

export default EventWhen;
