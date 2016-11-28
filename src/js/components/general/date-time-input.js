import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { store } from '../../init-store.js';
import Input from '../general/input.js';
import styles from '../../style.js';
import { Button } from '../common';

const DateTimeInput = ({ value, inputKey, inputCount, handleDate, handleTime, removeInput }) => {

    //let removeInputClasses = classnames("one column", {
      //  "display-none": inputKey === 0
    //});


    return (
        <View style={styles.dateTimeInput}>

            <View style={styles.row}>
                <Text style={styles.label}>
                    Date
                </Text>
                <Text style={styles.label}>
                    Time
                </Text>
            </View>
            <View style={styles.row}>

                <Input
                    ref={ (input) => {
                        if (input !== null && inputKey === inputCount - 1 && inputKey > 0) {
                            input.focus();
                        }
                    }}
                    style={styles.dateInputStyle}
                    type="date"
                    //value={ value.date }
                    placeholder="Date"
                    //onChangeText={ handleDate.bind(this, inputKey) }
                    />

                <Input
                    step="300"
                    style={styles.timeInputStyle}
                    type="time"
                    //value={ value.time }
                    placeholder="Time"
                    //onChangeText={ (e) => handleTime(inputKey, e) }
                    />

                { (inputKey === 0) &&
                  <View />
                }
                { (inputKey !== 0) &&
                  <Button
                    buttonStyle={styles.smallButtonStyle}
                    onPress={ (e) => removeInput(inputKey) }>
                      <Icon name="times" size={14} color="gray" />
                  </Button>
                }
            </View>
        </View>
    );
};

export default DateTimeInput;
