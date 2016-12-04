import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../common';
import styles from '../../../style.js';

const ConfirmEventWhat = ({ eventWhat }) => {

    const layout = Object.keys(eventWhat).map((data, i) => {

        let hideTitle = i > 0;

        return (
            <View
              style={styles.rowSpaced}
              key={ i }
            >
                { (hideTitle) &&
                  <View style={styles.columnLeft} />
                }
                { (!hideTitle) &&
                  <View style={styles.columnLeft}>
                    <Text style={styles.optionTitleWhat}>
                      What
                    </Text>
                  </View>
                }
                  <View
                    style={styles.columnMiddle}
                    key={ i }
                  >
                      <View style={styles.rowSpaced}>
                        <Button buttonStyle={styles.optionSelectedWhat} textStyle={styles.optionTextSelected}>
                          <Icon name="star" size={18} color="white" />
                          {'  '}
                          { eventWhat[data] || "TBC" }
                        </Button>
                      </View>
                  </View>
            </View>
        );
    });

    return (
        <View>
            { layout }
        </View>
    );
};

export default ConfirmEventWhat;
