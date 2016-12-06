import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import styles from '../../style';

const HostCreateEventButton = ({ hostEventChoices, handleConfirmEvent, eventID }) => { //eslint-disable-line
  const hostHasSelectedEventOptions =
  Object.keys(hostEventChoices).every(categoryName => hostEventChoices[categoryName] !== '');

  const hideButton = !hostHasSelectedEventOptions;

  return (
    <View>
      { (hideButton) &&
        <View />
      }
      { (!hideButton) &&
        <Button
          buttonStyle={styles.confirmButton}
          textStyle={styles.confirmButtonText}
          onClick={ () => { handleConfirmEvent(hostEventChoices, eventID); Actions.tabbar(); }}
        > CONFIRM & SEND INVITES </Button>
      }
    </View>
  );

};

export default HostCreateEventButton;
