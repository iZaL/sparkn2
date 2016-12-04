import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../style.js';

const EventDetailsHeader = ({ location, eventName, eventDescription, hostPhotoURL }) => {

    let hideEventDetails = eventName === "" || eventDescription === "" || location === "createEvent";

    if (!hostPhotoURL) {

        return (
          <View>
            { (hideEventDetails) &&
              <View />
            }
            { (!hideEventDetails) &&
              <View style={styles.rowEventDetailsHeader}>
                  <View>
                    <Text style={styles.eventDetailTextTitle}>
                      { eventName }
                    </Text>

                    <Text style={styles.eventDetailText}>
                      { eventDescription }
                    </Text>
                  </View>
              </View>
            }
          </View>
        );
    } else {

        return (
          <View>
            { (hideEventDetails) &&
              <View />
            }
            { (!hideEventDetails) &&
              <View>
                <View style={styles.rowEventDetailsHeader}>
                  <View style={styles.columnLeft}>
                      <View>
                        <Image
                          source={{ uri: hostPhotoURL }}
                          style={styles.uiEventDetailPhotoCircularImage}
                        />
                      </View>
                  </View>
                  <View style={styles.columnMiddle}>

                      <View style={styles.rowCentered}>
                        <View style={styles.columnCentered}>

                              <Text style={styles.eventDetailTextTitle}>
                                { eventName }
                              </Text>
                              <Text style={styles.eventDetailText}>
                                { eventDescription }
                              </Text>
                        </View>
                      </View>

                  </View>
                </View>
              </View>
            }
          </View>

        );
    }
};

export default EventDetailsHeader;
