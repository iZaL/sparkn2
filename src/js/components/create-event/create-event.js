import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import EventDetailsHeader from '../general/event-details-header.js';
import TopBar from '../event/top-bar.js';
import styles from '../../style.js';

const CreateEvent = ({ title, location, discardEvent, eventDetails, children }) => {

    return (
        <View>
            <TopBar location={ title }
                    discardEvent={ discardEvent }/>


            <EventDetailsHeader location={ title }
                                eventName={ eventDetails.eventName }
                                eventDescription={ eventDetails.eventDescription } />

            <View style={styles.container}>
            
            </View>
        </View>
    );

};

export default CreateEvent;
