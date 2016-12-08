import React from 'react';
import { View, Text } from 'react-native';
import AutocompleteInput from '../general/autocomplete-input';
import Router from '../../router';
import AddInput from '../general/add-input';
import EventDetailsHeader from '../general/event-details-header';
import Button from '../common/Button';
import styles from '../../style';

const Where = ({ eventDetails, eventWhereData, addInput, removeInput, handleEventWhere, navigator }) => { // eslint-disable-line react/prop-types

  const nextPage = () => {
    navigator.push(Router.getRoute('when'));
  };

  const inputs = eventWhereData.map((value, i) => {

    const templateNoSpace = `${value.placeName}${value.placeAddress}`;
    const templateWithSpace = `${value.placeName} ${value.placeAddress}`;
    const chosenTemplate = (value.placeAddress === '') ? templateNoSpace : templateWithSpace;
    const fullAddress = (value.placeName ? chosenTemplate : '');

    const autocompleteID = `autocomplete-${i}`;
    return (
      <AutocompleteInput
        handleChange={ () => handleEventWhere(i) }
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

  const hideNext = eventWhereData[0].placeName === '';

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
              onPress={ () => nextPage() }
            >
              Next
            </Button>
          }
        </View>
      </View>
    </View>
  );
};

export default Where;
