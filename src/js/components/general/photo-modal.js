import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../common';
import styles from '../../style.js';

const PhotoModal = ({ handleDeletePhoto, handleSharePhoto, eventID }) => {

    const closeModal = (e) => {
        document.getElementsByClassName('photo-modal-container')[0].style.display = 'none';
    };

    const handleShareClick = () => {
        handleSharePhoto();
        let messageElement = document.getElementsByClassName('message shared-to-fb')[0];
        let classes = document.getElementsByClassName('message shared-to-fb')[0].className.replace("display-none", '');
        messageElement.className = classes;
        setTimeout(() => {

            messageElement.className += " display-none";
        }, 2000);
        closeModal();
    };

    const handleDeleteClick = (eventID) => {
        handleDeletePhoto(eventID);
        closeModal();
    };

    return (
        <View style={styles.photoModalContainer}>
            <Button onPress={ closeModal }>
              <Icon name="times" size={18} color="gray" />
            </Button>
            <Button onPress={ handleShareClick }>
              <Text>Share to Facebook</Text>
              <Icon name="share" size={18} color="gray" />
            </Button>
            <Button onPress={ (e) => handleDeleteClick(eventID) }>
              <Text>Delete</Text>
              <Icon name="delete" size={18} color="red" />
            </Button>
        </View>
    );
};

export default PhotoModal;
