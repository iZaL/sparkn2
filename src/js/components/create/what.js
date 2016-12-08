import React from 'react';
import { View, Text } from 'react-native';
import Input from '../general/input';
import Router from '../../router';
import AddInput from '../general/add-input';
import EventDetailsHeader from '../general/event-details-header';
import Button from '../common/Button';
import styles from '../../style';

const What = ({ eventDetails, eventWhatData, addInput, removeInput, handleEventWhat, navigator }) => { // eslint-disable-line react/prop-types

  const inputCount = eventWhatData.length;

  const nextPage = () => {
    navigator.push(Router.getRoute('where'));
  };

  const inputs = eventWhatData.map((value, i) => {

    return (

      <Input
        style={styles.inputStyle}
        handleChange={ () => handleEventWhat(i) }
        key={ i }
        inputCount={ inputCount }
        value={ value }
        inputKey={ i }
        removeInput={ removeInput }
        placeholder="What would you like to do?"
      />

    );
  });

  const hideNext = eventWhatData[0] === '';

  return (
    <View>
      <View style={styles.rowEventDetailsHeader}>

        <EventDetailsHeader
          location="Enter details"
          eventName={ eventDetails.eventName }
          eventDescription={ eventDetails.eventDescription }
        />

      </View>

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

          { (hideNext) &&
            <View />
          }
          { (!hideNext) &&
            <Button
              onPress={ () => nextPage() }
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
            >
              Next
            </Button>
          }

        </View>
      </View>
    </View>
  );
};

export default What;
