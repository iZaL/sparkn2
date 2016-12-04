import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../style.js';

const Modal = ({ deleteEvent, closeModal }) => {

    return (
        <View style={styles.modalContainer}>
            <Icon name="exclamation-circle" size={18} color="gray" />
            <Text>Are you sure?</Text>
            <TouchableHighlight className="delete" onClick={ deleteEvent }>Delete</TouchableHighlight>
            <TouchableHighlight className="cancel" onClick={ closeModal }>Cancel</TouchableHighlight>
        </View>
    );
};

export default Modal;
