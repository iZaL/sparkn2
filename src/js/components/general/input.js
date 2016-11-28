import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../common';
import styles from '../../style.js';

const Input = ({ handleChange, value, placeholder, removeInput, inputKey, inputCount, style }) => {

    return (
        <View style={styles.row}>
            <TextInput
              ref={ (input) => {
                  if (input !== null && inputKey === inputCount - 1 && inputKey > 0 && input.value === "") {
                      input.focus();
                  }
              }}
              placeholder={placeholder}
              autoCorrect={false}
              value={value}
              onChangeText={handleChange}
              style={style}
            />

            { (inputKey === 0) &&
              <View />
            }
            { (inputKey !== 0) &&
              <Button buttonStyle={styles.smallButtonStyle} onPress={ (e) => removeInput(inputKey) }>
                  <Icon name="times" size={14} color="gray" />
              </Button>
            }

        </View>
    );
};

export default Input;
