import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DateTimeInput from '../general/date-time-input.js';
import AddInput from '../general/add-input.js';
import { Button } from '../common';
import styles from '../../style.js';

const EventWhen = ({ eventWhenData, addInput, removeInput, handleDate, handleTime }) => {

    let inputs = eventWhenData.map( (value, i) => {
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

    // let addInputClasses = classnames("twelve columns", {
    //     "display-none": eventWhenData.length >= 3
    // });
    //
    //
    // let nextButtonClasses = classnames("twelve columns", {
    //     "display-none": eventWhenData[0].date === ""
    // });

    return (
      <View style={styles.container}>
          <Text style={styles.smallMessageText}>
              Enter a date and a time for your event (or leave them blank to decide later).
          </Text>
          <Text style={styles.smallMessageText}>
              You can add more than one option to create a poll.
          </Text>
          { inputs }

          <AddInput data={ eventWhenData } handler={ addInput } />

          <View style={styles.row}>

              <Button
                buttonStyle={styles.buttonStyle}
                onPress={Actions.inviteFriends}
              >
                Next
              </Button>
          </View>
      </View>
    );
};

export default EventWhen;
