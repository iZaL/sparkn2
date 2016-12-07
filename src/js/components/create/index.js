import React from 'react';
import { View } from 'react-native';
import TopBar from '../event/top-bar';
import styles from '../../style';

const Create = ({ title, discardEvent, eventDetails }) => {
  return (
    <View>
      <EventDetailsHeader
        location={ title }
        eventName={ eventDetails.eventName }
        eventDescription={ eventDetails.eventDescription }
      />
      <View style={styles.container} />
    </View>
  );
};

export default Create;
