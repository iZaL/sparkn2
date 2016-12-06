import React from 'react';
import { View } from 'react-native';
import EventDetailsHeader from '../general/event-details-header';
import TopBar from '../event/top-bar';
import styles from '../../style';

const CreateEvent = ({ title, location, discardEvent, eventDetails, children }) => { // eslint-disable-line reac

  return (
    <View>
      <TopBar
        location={ title }
        discardEvent={ discardEvent }
      />

      <EventDetailsHeader
        location={ title }
        eventName={ eventDetails.eventName }
        eventDescription={ eventDetails.eventDescription }
      />
      <View style={styles.container} />
    </View>
  );

};

export default CreateEvent;
