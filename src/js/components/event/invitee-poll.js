import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PollButton from '../general/poll-button.js';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './poll-sections.js';
import styles from '../../style.js';

const InviteePoll = ({ event, toggleSelection, poll, handlePollConfirmation, eventID, isHost, hasVoted }) => {

    let eventWhat = createPollSelections(event, toggleSelection, poll, 'eventWhat', EventWhatSection);
    let eventWhere = createPollSelections(event, toggleSelection, poll, 'eventWhere', EventWhereSection);
    let eventWhen = createPollSelections(event, toggleSelection, poll, 'eventWhen', EventWhenSection);

    let voteButtonText = hasVoted ? "VOTE AGAIN" : "VOTE";

    function eventNote (event) {

        if (event.eventNote !== "") {
            return (
                <View style={styles.eventNote}>
                    { event.eventNote }

                </View>
            );
        }
    }

    return (
            <View style={styles.Poll}>
                { eventNote(event) }

                <View style={styles.eventWhat}>
                    { eventWhat }
                </View>
                <View style={styles.eventWhere}>
                    { eventWhere }
                </View>
                <View style={styles.eventWhen}>
                    { eventWhen}
                </View>

                <PollButton poll={ poll }
                            handlePollConfirmation={ handlePollConfirmation }
                            eventID={ eventID }
                            voteButtonText={ voteButtonText }/>

            </View>
    );
};


function createPollSelections (event, toggleSelection, poll, eventType, EventTypeComponent) {


    return event[eventType].map((choice, i) => {

        let selectedClasses = (poll[eventType] === undefined || poll[eventType][i] === true);
        let hideClasses = i > 0;

        if (poll[eventType]) {

            return (
                <Button onClick={ () => toggleSelection(eventType, i) }
                     key={eventType + '-' + i}>

                    <EventTypeComponent text={ choice }
                                        choiceClasses={ selectedClasses }
                                        labelClasses={ hideClasses }/>
                </Button>
            );
        } else {

            return (
                <Button key={eventType + '-' + i}>
                    <EventTypeComponent text={ choice }
                                        choiceClasses={ selectedClasses }
                                        labelClasses={ hideClasses }/>
                </Button>
            );
        }
    });
}


export default InviteePoll;
