import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './poll-sections.js';
import HostCreateEventButton from './host-create-event-button.js';
import { Button } from '../common';
import styles from '../../style.js';

const HostPoll = ({ event, tally, hostEventChoices, handleHostEventChoices, handleConfirmEvent, eventID  }) => {
    console.log(hostEventChoices);
    let eventWhat = createVoteSection(event, tally, 'eventWhat', EventWhatSection, handleHostEventChoices, hostEventChoices);
    let eventWhere = createVoteSection(event, tally, 'eventWhere', EventWhereSection, handleHostEventChoices, hostEventChoices);
    let eventWhen = createVoteSection(event, tally, 'eventWhen', EventWhenSection, handleHostEventChoices, hostEventChoices);

    function eventNote (event) {

        if (event.eventNote !== "") {

            return (
                <View style={styles.eventNote}>
                  <Text style={styles.msg2}>
                    { event.eventNote }
                  </Text>
                </View>
            );
        }
    }

    return (

        <View>
            <View>{ eventNote(event) }</View>

            <View style={styles.row}>
                <View>{ eventWhat }</View>
            </View>
            <View style={styles.row}>
                <View>{ eventWhere }</View>
            </View>
            <View style={styles.row}>
                <View>{ eventWhen }</View>
            </View>

            <HostCreateEventButton hostEventChoices={ hostEventChoices }
                handleConfirmEvent={ handleConfirmEvent }
                eventID={ eventID } />

        </View>
    );
};

function createVoteSection (event, tally, eventType, EventTypeComponent, handleHostEventChoices, hostEventChoices) {


    return event[eventType].map((choice, i) => {

        let selectedClasses = (hostEventChoices[eventType] === i || hostEventChoices[eventType] === undefined);
        let hideClasses = i > 0;

        let tallyCount = tally[eventType] ? tally[eventType][i] : '';

        if (tally[eventType]) {
            console.log(choice);
            console.log(tallyCount);
            console.log(selectedClasses);
            console.log(hideClasses);

            return (
                <Button onClick={ () => handleHostEventChoices(eventType, choice, i) }
                     key={ eventType + '-' + i } >
                    <EventTypeComponent text={ choice }
                                        tally={ tallyCount }
                                        choiceClasses={ selectedClasses }
                                        labelClasses={ hideClasses } />
                </Button>
            );
        } else {

            return (
                <View key={ eventType + '-' + i }>
                    <EventTypeComponent
                        text={ choice }
                        tally={ tallyCount }
                        choiceClasses={ selectedClasses }
                        labelClasses={ hideClasses } />
                </View>
            );
        }
    });
}

export default HostPoll;
