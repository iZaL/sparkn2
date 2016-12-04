import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';
import styles from '../../style.js';

const DeletedEvent = () => {
    return (
        <View>
            <View style={styles.eventHeaderRow}>

                <View>

                    <Text>Deleted Event</Text>

                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.smallMessageText}>
                This Event has been deleted.
                </Text>

                <View style={styles.row}>
                    <Button buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onClick={ () => { Actions.tabbar(); } }>
                        Back to Feed
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default DeletedEvent;
