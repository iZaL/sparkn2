import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { store } from '../../init-store.js';
import styles from '../../style.js';
import Button from '../common/Button';

const DateTimeInput = ({ value, inputKey, inputCount, handleDate, handleTime, removeInput }) => {

    let hideRemoveInput = inputKey === 0

    return (


          <View style={styles.dateInputRow}>

            <View style={styles.dateInputColumn}>

                <View>
                  <Text style={styles.dateTimeLabel}>
                      Date
                  </Text>
                </View>

                <View>

                  <TextInput
                      ref={ (input) => {
                          if (input !== null && inputKey === inputCount - 1 && inputKey > 0) {
                              input.focus();
                          }
                      }}
                      style={styles.dateInputStyle}
                      value={ value.date }
                      placeholder="Date"
                      onChange={ handleDate.bind(this, inputKey) }
                      />
                </View>
            </View>

            <View style={styles.timeInputColumn}>

                <Text style={styles.dateTimeLabel}>
                    Time
                </Text>

                <View style={styles.timeInputRow}>

                <TextInput
                    step="300"
                    style={styles.timeInputStyle}
                    value={ value.time }
                    placeholder="Time"
                    onChange={ (e) => handleTime(inputKey, e) }
                    />

                </View>
            </View>

            <View style={styles.removeInputColumn}>

                { (hideRemoveInput) &&
                  <View />
                }
                { (!hideRemoveInput) &&
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
