import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';
import styles from '../../style';
import Input from '../general/input.js';
import AutocompleteInput from '../general/autocomplete-input.js';
import DateTimeInput from '../general/date-time-input.js';
import TopBar from './top-bar.js';


const EditEvent = (props) => {

    let eventWhat = props.eventWhat[0];
    let eventWhere = props.eventWhere[0];
    let eventWhen = props.eventWhen[0];

    let templateNoSpace = `${eventWhere.placeName}${eventWhere.placeAddress}`;
    let templateWithSpace = `${eventWhere.placeName} ${eventWhere.placeAddress}`;
    let chosenTemplate = eventWhere.placeAddress === '' ? templateNoSpace : templateWithSpace;
    let fullAddress = (eventWhere.placeName ? chosenTemplate : "");

    let hideButtonToggle = eventWhat.length === 0 || eventWhere.placeName === "" || eventWhen.date === "" || props.eventDetails.eventName === "" || props.eventDetails.eventDescription === "";

    let hideSaveButton = hideButtonToggle;


    return (
            <View>
                <View style={styles.row}>
                    <View>
                        <Text>Edit Event</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text> Details </Text>
                    <View style={styles.row}>
                        <Input
                            style={styles.inputStyle}
                            handleChange={ props.handleChange.bind(this, 'eventName') }
                            value={ props.eventDetails ? props.eventDetails.eventName : '' }
                            placeholder="Event name" />

                    </View>

                    <View style={styles.row}>
                        <Input
                            style={styles.inputStyle}
                            handleChange={ props.handleChange.bind(this, 'eventDescription') }
                            value={ props.eventDetails ? props.eventDetails.eventDescription : '' }
                            placeholder="Event description" />
                    </View>

                    <View style={styles.row}>
                        <Input
                            style={styles.inputStyle}
                            handleChange={ props.handleChange.bind(this, 'eventNote') }
                            value={ props.eventDetails ? props.eventDetails.eventNote : '' }
                            placeholder="Leave a note to your friends (optional)" />
                    </View>

                    <Text> What </Text>
                    <Input
                        handleChange={ props.handleEventWhat.bind(this, 0) }
                        value={ eventWhat }
                        inputKey={ 0 }
                        removeInput=''
                        placeholder="What would you like to do?"
                    />

                    <Text> Where </Text>
                        <AutocompleteInput
                            handleChange={ props.handleEventWhere.bind(this, 0) }
                            inputKey={ 0 }
                            value={ fullAddress }
                            placeholder="Where?"
                            id='autocomplete-0'
                            removeInput=''
                        />

                    <Text> When </Text>
                        <DateTimeInput
                            value={ eventWhen }
                            inputKey={ 0 }
                            handleTime={ props.handleTime }
                            handleDate={ props.handleDate }
                            removeInput=''
                        />

                    <Button buttonStyle={styles.buttonStyle} buttonText={styles.buttonTextStyle} onClick={ () => { props.handleSaveEditedEvent(props.eventDetails.eventName, props.eventDetails.eventDescription, props.eventDetails.eventNote, eventWhat, eventWhere, eventWhen, props.params.eventID ); Actions.tabbar(); } }>
                        Save Edited Event
                    </Button>

                </View>
            </View>
        );
};

export default EditEvent;
