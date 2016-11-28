import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Input from '../general/input.js';
import AddInput from '../general/add-input.js';
import { Button } from '../common';
import styles from '../../style.js';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let inputCount = eventWhatData.length;

    let inputs = eventWhatData.map( (value, i) => {

        return (
            <Input
                handleChange={ handleEventWhat.bind(this, i) }
                key={ i }
                inputCount={ inputCount }
                value={ value }
                inputKey={ i }
                removeInput={ removeInput }
                placeholder= "What would you like to do?"
            />);
    });

    // let addInputClasses = (eventWhatData.length >= 3 ? styles.displayNone : );

    // let nextButtonClasses = (eventWhatData[0] === "" ? styles.displayNone : );

    return (
        <View style={styles.container}>
            <Text style={styles.smallMessageText}>
                Enter what your event will be (or leave blank to decide it later).
            </Text>
            <Text style={styles.smallMessageText}>
                You can add more than one option to create a poll.
            </Text>
            { inputs }

            <AddInput data={ eventWhatData } handler={ addInput } />

            <View style={styles.row}>

                <Button
                buttonStyle={styles.buttonStyle}
                onPress={Actions.where}
                >
                  Next
                </Button>

            </View>
        </View>
    );
};

export default EventWhat;