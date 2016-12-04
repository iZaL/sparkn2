import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../common';
import styles from '../../style.js';

const CancelConfirmedEventModal = ({ handleDeleteEvent, handleCloseModal }) => {

    return (
        <View style={styles.basicModal)>
            <View>
              <View>
                <Icon name="warning circle icon" size={18} />
              </View>
            </View>
          <View style={styles.header}>
            <Text>Delete this event?</Text>
          </View>
          <View>
            <View>
              <Button onClick={ handleCloseModal }>
                <Icon name="remove icon" size={14} color:'red' />
                <Text>
                  No
                </Text>
              </Button>
              <Button onClick={ handleDeleteEvent }>
                <Icon name="checkmark icon" size={14} color:'green' />
                <Text>
                  Yes
                </Text>
              </Button>
            </View>
          </View>
        </View>
    );

};

export default CancelConfirmedEventModal;
