import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import EventDetailsHeader from '../general/event-details-header.js';
import TopBar from '../event/top-bar.js';
import styles from '../../style.js';

const CreateEvent = ({ title, location, discardEvent, eventDetails, children }) => {
    console.log('title' + title);
    return (
        <View>
            <TopBar location={ title }
                    discardEvent={ discardEvent }/>


            <EventDetailsHeader location={ title }
                                eventName={ eventDetails.eventName }
                                eventDescription={ eventDetails.eventDescription } />

            <View style={styles.container}>
                { children }
            </View>
        </View>
    );

};

export default CreateEvent;
