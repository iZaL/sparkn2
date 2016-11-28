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
                      <Image
                        source={{ uri: { hostPhotoURL } }}
                        style={styles.uiEventDetailPhotoCircularImage}
                      >
                        <Text>HostPhoto</Text>
                      </Image>
                  </View>
                  <View style={styles.columnEventDetailTextContainer}>
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
    }
};

export default EventDetailsHeader;
