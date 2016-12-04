import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../common';
import styles from '../../../style';
import PhotoModal from '../../general/photo-modal.js';
import Loader from '../../general/loader.js';


const PhotoStream = ({ hasPhotoLoaded, photos, deletedPhotos, getSelectedPhoto, handleDeletePhoto, handleSharePhoto, eventID }) => {

    const displayModal = () => {

        document.getElementsByClassName('photo-modal-container')[0].style.display = 'flex';
    };

    const handleMenuClick = (photoURL) => {

        getSelectedPhoto(photoURL);
        displayModal();
    };

    let filteredPhotos = photos.filter((individualPhoto, index) => {

        return deletedPhotos.indexOf(individualPhoto.photoURL) === -1;
    });

    let stream = filteredPhotos.map((photo, i) => {

        return (
            <View style={styles.rowPhoto} key={ i }>
                <Image style={styles.photo} source={{ uri: photo.photoURL }} />
                <TouchableHighlight id={ photo.photoURL } onPress={ (e) => handleMenuClick(e.target.id) }>
                  <Icon name="ellipsis-v" size={14} color="gray" />
                </TouchableHighlight>
            </View>
        );
    });

    return (
        <View>
            <PhotoModal handleDeletePhoto={ handleDeletePhoto }
                        handleSharePhoto={ handleSharePhoto }
                        eventID={ eventID } />
            { hasPhotoLoaded === false &&  <Loader /> }
            { photos && hasPhotoLoaded !== false && stream }
        </View>
    );
};

export default PhotoStream;