import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../common';
import formatDate from '../../../lib/formatDate.js';
import styles from '../../../style.js';

const ConfirmEventWhen = ({ eventWhen }) => {

    const layout = eventWhen.map((data, i) => {

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
                  <Text style={styles.optionTitleWhen}>
                    When
                  </Text>
                </View>
              }
                <View style={styles.columnMiddle}>
                    <View style={styles.rowSpaced}>

                          <Button buttonStyle={styles.optionSelectedWhen} textStyle={styles.optionTextSelected}>
                              <Icon name="calendar" size={18} color="white" />
                              {'  '}
                              { formatDate(data.date, true) || "TBC" }
                              {'  '}
                              <Icon name="clock-o" size={18} color="white" />
                              {'  '}
                              { data.time || "TBC" }
                          </Button>

                    </View>
                </View>
            </View>
        );
    });

    return (
        <View
        style={styles.confirmList}
        >
            { layout }
        </View>
    );
};

export default ConfirmEventWhen;
