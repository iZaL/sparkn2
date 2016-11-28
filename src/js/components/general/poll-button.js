import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';
import styles from '../../style.js';

const PollButton = ({ poll, handlePollConfirmation, eventID, voteButtonText }) => {

    let userHasCompletedPoll = Object.keys(poll).map((categoryName, i) => {

        return poll[categoryName].some((value) => {

            return value === true;
        });
    }).every((category) => {

        return category === true;
    });

    function handleSelection (poll, eventID) {
        handlePollConfirmation(poll, eventID);
        Actions.feed();
    }

    return (
      <View>
        { (!userHasCompletedPoll) &&
          <View />
        }
        { (userHasCompletedPoll) &&
          <Button
          buttonStyle={styles.buttonStyle}
          onClick={ () => handleSelection(poll, eventID) }>
            { voteButtonText }
          </Button>
        }
      </View>

    );
};

export default PollButton;
