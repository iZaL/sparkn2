import React from 'react';
import { View } from 'react-native';
import { Button } from '../common';
import styles from '../../style.js';

const AddInput = ({ data, handler }) => {

    return (
      <View>
        { (data.length >= 3) &&
          <View />
        }
        { (data.length < 3) &&
          <View style={styles.row}>
              <Button
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                onPress={ (e) => handler(data.length) }
              >
                  Add an option
              </Button>
          </View>
        }
      </View>
    );
};

export default AddInput;