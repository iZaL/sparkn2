import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import styles from '../../style';
import Input from '../general/input';
import AutocompleteInput from '../general/autocomplete-input';
import DateTimeInput from '../general/date-time-input';
// import TopBar from './top-bar';

const EditEvent = (props) => {

  const eventWhat = props.eventWhat[0]; // eslint-disable-line
  const eventWhere = props.eventWhere[0]; // eslint-disable-line
  const eventWhen = props.eventWhen[0]; // eslint-disable-line

  const templateNoSpace = `${eventWhere.placeName}${eventWhere.placeAddress}`;
  const templateWithSpace = `${eventWhere.placeName} ${eventWhere.placeAddress}`;
  const chosenTemplate = eventWhere.placeAddress === '' ? templateNoSpace : templateWithSpace;
  const fullAddress = (eventWhere.placeName ? chosenTemplate : '');

  const hideButtonToggle = eventWhat.length === 0 || eventWhere.placeName === '' || eventWhen.date === '' || props.eventDetails.eventName === '' || props.eventDetails.eventDescription === '';

  const hideSaveButton = hideButtonToggle;

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
            placeholder="Event name"
          />

        </View>

        <View style={styles.row}>
          <Input
            style={styles.inputStyle}
            handleChange={ props.handleChange.bind(this, 'eventDescription') }
            value={ props.eventDetails ? props.eventDetails.eventDescription : '' }
            placeholder="Event description"
          />
        </View>

        <View style={styles.row}>
          <Input
            style={styles.inputStyle}
            handleChange={ props.handleChange.bind(this, 'eventNote') }
            value={ props.eventDetails ? props.eventDetails.eventNote : '' }
            placeholder="Leave a note to your friends (optional)"
          />
        </View>

        <Text> What </Text>
        <Input
          handleChange={ props.handleEventWhat.bind(this, 0) }
          value={ eventWhat }
          inputKey={ 0 }
          removeInput=""
          placeholder="What would you like to do?"
        />

        <Text> Where </Text>
        <AutocompleteInput
          handleChange={ props.handleEventWhere.bind(this, 0) }
          inputKey={ 0 }
          value={ fullAddress }
          placeholder="Where?"
          id="autocomplete-0"
          removeInput=""
        />

        <Text> When </Text>
        <DateTimeInput
          value={ eventWhen }
          inputKey={ 0 }
          handleTime={ props.handleTime }
          handleDate={ props.handleDate }
          removeInput=""
        />

        <Button
          buttonStyle={styles.buttonStyle}
          buttonText={styles.buttonTextStyle}
          onClick={ () => { props.handleSaveEditedEvent(props.eventDetails.eventName, props.eventDetails.eventDescription, props.eventDetails.eventNote, eventWhat, eventWhere, eventWhen, props.params.eventID ); Actions.tabbar(); } }>
          Save Edited Event
        </Button>

      </View>
    </View>
  );
};

export default EditEvent;
