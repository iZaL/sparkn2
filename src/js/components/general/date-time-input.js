import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { store } from '../../init-store.js';
import Input from '../general/input.js';
import styles from '../../style.js';
import { Button } from '../common';

const DateTimeInput = ({ value, inputKey, inputCount, handleDate, handleTime, removeInput }) => {

    let hideRemoveInput = inputKey === 0

    return (


          <View style={styles.rowWhen}>

            <View style={styles.column}>

                <View>
                  <Text style={styles.label}>
                      Date
                  </Text>
                </View>

                <View>

                  <Input
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

            <View style={styles.column}>

                <Text style={styles.label}>
                    Time
                </Text>

                <Input
                    step="300"
                    style={styles.timeInputStyle}
                    value={ value.time }
                    placeholder="Time"
                    onChange={ (e) => handleTime(inputKey, e) }
                    />
            </View>

            <View style={styles.column}>

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
