import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../common';
import styles from '../../../style';
import { store } from '../../../init-store.js';


const UploadPanel = ({ hasPhotoLoaded, eventID, handleUploadPhoto, file, handleSetFile }) => {

    let hideUploadPhotoButton = (hasPhotoLoaded === false || file === undefined);

    return (
        <View style={styles.uploadPanel}>
            <Text>Photos</Text>

            { hideUploadPhotoButton &&
              <View />
            }
            { !hideUploadPhotoButton &&
              <View>
                <Button id="file-upload" buttonStyle={styles.buttonStyle} buttonText={styles.buttonTextStyle} onPress={ () => { handleUploadPhoto(file, eventID); } }  value="Upload photo">
                  <Text>Upload photo</Text>
                </Button>
              </View>
            }

            <View style={styles.row}>
                <Button buttonStyle={styles.buttonStyle} buttonText={styles.buttonTextStyle}>
                    Choose a photo to upload
                    <Input onChange={ (e) => handleSetFile(e.target.files[0]) } type="file" accept="image/*;capture=camera" />
                </Button>
            </View>

       </View>
    );
};

export default UploadPanel;
