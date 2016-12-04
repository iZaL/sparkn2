import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';
import styles from '../../style.js';

const HostCreateEventButton = ({ hostEventChoices, handleConfirmEvent, eventID }) => {
    let hostHasSelectedEventOptions =
    Object.keys(hostEventChoices).every((categoryName) => {
        return hostEventChoices[categoryName] !== "";
    });

    let hideButton = !hostHasSelectedEventOptions;

    return (
        <View>
          { (hideButton) &&
            <View />
          }
          { (!hideButton) &&
            <Button buttonStyle={styles.confirmButton} textStyle={styles.confirmButtonText} onClick={ () => { handleConfirmEvent(hostEventChoices, eventID);      Actions.tabbar(); } }> CONFIRM & SEND INVITES </Button>
          }
        </View>
    );

};

export default HostCreateEventButton;
