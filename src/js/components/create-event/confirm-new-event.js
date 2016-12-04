import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ConfirmEventWhat from './confirmation/confirm-event-what.js';
import ConfirmEventWhere from './confirmation/confirm-event-where.js';
import ConfirmEventWhen from './confirmation/confirm-event-when.js';
import formatDate from '../../lib/formatDate.js';
import { isPoll } from '../../lib/create-event-helpers.js';
import TopBar from '../event/top-bar.js';
import styles from '../../style.js';
import { Button } from '../common';

const ConfirmNewEvent = ({ data, saveEvent }) => {
    console.log(data);
    console.log(saveEvent);
    let SaveButtonIsHidden = data.eventWhen[0].date === "" && isPoll(data) === false;

    let SaveButtonText = isPoll(data) === true ? "SEND POLL" : "CONFIRM & SEND INVITES";

    const invitedFriends = data.invitees.map((inviteeObject) => {
        return (
          <View
            key={ inviteeObject.id }
            style={styles.inviteeItem}
          >

              <Image
              style={styles.uiAvatarImage}
              source={{ uri: inviteeObject.photoURL }}
              />

              <Text style={styles.msg2}>
                { inviteeObject.firstName }
              </Text>

          </View>
        );
    });

    return (
      <View>
        <TopBar location="confirm" />
        <ScrollView>
          <View>


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


              <View style={styles.invitedWrapped}>
                  { invitedFriends }
              </View>


            { (SaveButtonIsHidden) &&
              <View />
            }
            { (!SaveButtonIsHidden) &&
              <View style={styles.rowCentered}>
                <Button
                buttonStyle={styles.confirmButton}
                textStyle={styles.confirmButtonText}
                onPress={ (e) => saveEvent(data) }>
                    { SaveButtonText }
                </Button>
              </View>
            }

          </View>
        </ScrollView>
      </View>
    );
};

export default ConfirmNewEvent;
