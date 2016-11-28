import React from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ConfirmEventWhat from './confirmation/confirm-event-what.js';
import ConfirmEventWhere from './confirmation/confirm-event-where.js';
import ConfirmEventWhen from './confirmation/confirm-event-when.js';
import formatDate from '../../lib/formatDate.js';
import { isPoll } from '../../lib/create-event-helpers.js';
import styles from '../../style.js';
import { Button } from '../common';

const ConfirmNewEvent = ({ data, saveEvent }) => {

    let SaveButtonIsHidden = data.eventWhen[0].date === "" && isPoll(data) === false;

    let SaveButtonText = isPoll(data) === true ? "SEND POLL" : "CONFIRM & SEND INVITES";

    const invitedFriends = data.invitees.map((inviteeObject) => {
        return (
          <View
            key={ inviteeObject.id }
            style={styles.item}
          >

              <Image
              style={styles.uiAvatarImage}
              source={ inviteeObject.photoURL }
              />

              <View style={styles.content}>
                  <View style={styles.header}>
                      { inviteeObject.firstName }
                  </View>
              </View>
          </View>
        );
    });


    // let saveEventButton = classnames("twelve columns button-primary", {
    //     "display-none": SaveButtonIsHidden
    // });
    //
    // let eventWhenInfo = classnames("twelve columns required-field-text", {
    //     "display-none": !SaveButtonIsHidden
    // });

    return (
      <View style={styles.container}>

          <ConfirmEventWhat eventWhat={ data.eventWhat } />

          <ConfirmEventWhere eventWhere={ data.eventWhere } />

          { (!SaveButtonIsHidden) &&
            <View />
          }
          { (SaveButtonIsHidden) &&
            <View>

                <Text>You need to enter a date before saving this event.</Text>

                <Button
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                onPress={Actions.when}
                >
                    Add a Date
                </Button>

            </View>
          }

          <ConfirmEventWhen eventWhen={ data.eventWhen }/>

          <Text style={styles.invitedTitle}>
            Invited friends
          </Text>

          <View style={styles.uiBigHorizontalList}>
              { invitedFriends }
          </View>

          { (SaveButtonIsHidden) &&
            <View />
          }
          { (!SaveButtonIsHidden) &&
            <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            onPress={ (e) => saveEvent(data) }>
                { SaveButtonText }
            </Button>
          }

      </View>
    );
};

export default ConfirmNewEvent;
