import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../common';
import styles from '../../../style.js';
import { store } from '../../../init-store';

const RSVPsArea = ({ eventID, invitees, RSVPs, respondedList, notRespondedList, handleClick }) => {

    function RSVPUserList (RSVPs, invitees, status) {

        return RSVPs[status].map((id, index) => {
            let usersWithRSVP = invitees.filter((userObject) => {
                return id === userObject.id;
            });

            return (
                <View style={styles.item} key={ index }>
                    <Image style={styles.uiAvatarImage} source={{ uri: usersWithRSVP[0].photoURL }} />
                    <View style={styles.content}>
                        <View style={styles.headerRsvpListItems}>{ usersWithRSVP[0].firstName }</View>
                    </View>
                </View>
            );
        });
    }

    return (
        <View>
            <Text>RSVPs</Text>

            <View style={styles.row}>
                <View>
                    <Button buttonStyle={styles.RSVPButtonGoing} onPress={ () => handleClick('going', eventID) }> Going </Button>
                    <View style={styles.uiBigHorizontalList}>
                        { RSVPUserList(RSVPs, invitees, 'going') }
                    </View>
                </View>

                <View>
                    <Button buttonStyle={styles.RSVPButtonMaybe} onPress={ () => handleClick('maybe', eventID) }> Maybe </Button>
                    <View style={styles.uiBigHorizontalList}>
                        { RSVPUserList(RSVPs, invitees, 'maybe') }
                    </View>
                </View>

                <View>
                    <Button buttonStyle={styles.RSVPButtonNotGoing} onPress={ () => handleClick('notGoing', eventID) }> Not Going </Button>
                    <View style={styles.uiBigHorizontalList}>
                        { RSVPUserList(RSVPs, invitees, 'notGoing') }
                    </View>
                </View>
            </View>


            <View style={styles.row}>
                <View style={styles.RSVPButtonNotResponded}>
                    <View> Not Responded </View>
                </View>
                <View>
                    <View style={styles.uiBigHorizontalList}>
                        { notRespondedList(respondedList, invitees) }
                    </View>
                </View>
            </View>


            <View style={styles.row}>
                <View />
            </View>

        </View>
    );
};

export default RSVPsArea;
