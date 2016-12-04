import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import formatDate from '../../lib/formatDate.js';
import { Button } from '../common';
import styles from '../../style.js';


export const EventWhatSection = ({ text, tally, choiceClasses, labelClasses }) => {
    console.log('eventWhat');
    console.log(text);
    console.log(tally);
    console.log(choiceClasses);
    console.log(labelClasses);
    return (
        <View style={styles.pollSection}>
            { (labelClasses) &&
              <View style={styles.columnLeft} />
            }
            { (!labelClasses) &&
              <View style={styles.columnLeft}>
                <Text style={styles.optionTitleWhat}>What</Text>
              </View>
            }
            { (!choiceClasses) &&
              <View style={styles.columnMiddle} />
            }
            { (choiceClasses) &&
            <View style={styles.columnMiddle}>
              <View style={styles.rowSpaced}>
                <Button buttonStyle={styles.optionDeSelectedWhat} textStyle={styles.optionTextDeselectedWhat}>
                  <Icon name="star" size={18} color="white" />
                  {'  '}
                  { text || "TBC" }
                </Button>
              </View>
            </View>
            }
            <View style={styles.columnRight}>
              <Text style={styles.msg1}>
                { tally + ' votes'}
              </Text>
            </View>
        </View>
    );
};

export const EventWhereSection = ({ text, tally, choiceClasses, labelClasses }) => {

    let placeNameLong = text.placeName.length > 18;
    console.log('eventWhere');
    return (
        <View style={styles.pollSection}>
            { (labelClasses) &&
              <View style={styles.columnLeft} />
            }
            { (!labelClasses) &&
              <View style={styles.columnLeft}>
                <Text style={styles.optionTitleWhere}>Where</Text>
              </View>
            }
            { (!choiceClasses) &&
              <View style={styles.columnMiddle} />
            }
            { (choiceClasses) &&
              <View style={styles.columnMiddle}>
                <View style={styles.rowSpaced}>
                  <Button buttonStyle={styles.optionSelectedWhere} textStyle={styles.optionTextSelected}>
                    <Icon name="map-marker" size={18} color="white" />
                    {'  '}
                    { (!placeNameLong) &&
                      <Text style={styles.placeNameShort}>
                        { text.placeName || "TBC" }
                      </Text>
                    }
                    { (placeNameLong) &&
                      <Text style={styles.placeNameLong}>
                        { text.placeName || "TBC" }
                      </Text>
                    }

                    {
                        text.placeAddress !== '' &&
                        <Text style={styles.placeAddress}>
                            { text.placeAddress }
                        </Text>
                    }
                  </Button>
                </View>
              </View>
            }
            <View style={styles.columnRight}>
              <Text style={styles.msg1}>
                { tally + ' votes'}
              </Text>
            </View>
        </View>
    );
};

export const EventWhenSection = ({ text, tally, choiceClasses, labelClasses }) => {
    console.log('eventWhen');
    return (
      <View style={styles.pollSection}>
          { (labelClasses) &&
            <View style={styles.columnLeft} />
          }
          { (!labelClasses) &&
            <View style={styles.columnLeft}>
              <Text style={styles.optionTitleWhen}>When</Text>
            </View>
          }
          { (!choiceClasses) &&
            <View style={styles.columnMiddle} />
          }
          { (choiceClasses) &&
            <View style={styles.columnMiddle}>
              <View style={styles.rowSpaced}>
                <Button buttonStyle={styles.optionSelectedWhen} textStyle={styles.optionTextSelected}>
                    <Icon name="calendar" size={18} color="white" />
                    {'  '}
                    { formatDate(text.date, 'half') || "TBC" }
                    {'  '}
                    { text.time || 'TBC' }
                </Button>
              </View>
            </View>
          }
            <View style={styles.columnRight}>
              <Text style={styles.msg1}>
                { tally + ' votes'}
              </Text>
            </View>
      </View>
    );
};
