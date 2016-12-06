import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AutocompleteInput from '../general/autocomplete-input';
import AddInput from '../general/add-input';
import EventDetailsHeader from '../general/event-details-header';
import TopBar from '../event/top-bar';
import Button from '../common/Button';
import styles from '../../style';

const EventWhere = ({ eventDetails, eventWhereData, addInput, removeInput, handleEventWhere }) => { // eslint-disable-line react/prop-types

  const inputs = eventWhereData.map((value, i) => {

    const templateNoSpace = `${value.placeName}${value.placeAddress}`;
    const templateWithSpace = `${value.placeName} ${value.placeAddress}`;
    const chosenTemplate = (value.placeAddress === '') ? templateNoSpace : templateWithSpace;
    const fullAddress = (value.placeName ? chosenTemplate : '');

    const autocompleteID = `autocomplete-${i}`;
    return (
      <AutocompleteInput
        handleChange={ handleEventWhere.bind(this, i) }
        key={ i }
        inputKey={ i }
        inputCount={ eventWhereData.length }
        value={ fullAddress }
        placeholder="Where?"
        id={ autocompleteID }
        removeInput={ removeInput }
      />
    );
  });

  const hideAddInput = eventWhereData.length >= 3;
  const hideNext = eventWhereData[0].placeName === '';

  return (
    <View>
      <TopBar location="eventdetails/where" />
      <View style={styles.rowEventDetailsHeader}>

        <EventDetailsHeader
          location="Enter details"
          eventName={ eventDetails.eventName }
          eventDescription={ eventDetails.eventDescription }
        />

      </View>
      <View style={styles.container}>
        <Text style={styles.smallMessageText}>
          Enter where the event will take place (or leave blank to decide it later).
        </Text>
        <Text style={styles.smallMessageText}>
          You can add more than one option to create a poll.
        </Text>

        { inputs }

        <AddInput data={ eventWhereData } handler={ addInput } />

        <View style={styles.row}>
          { (hideNext) &&
            <View />
          }
          { (!hideNext) &&
            <Button
              buttonStyle={styles.buttonStyle}
              onPress={Actions.when}
            >
              Next
            </Button>
          }
        </View>
      </View>
    </View>
  );
};

export default EventWhere;
