import React from 'react';
import { View, Text } from 'react-native';
import classnames from 'classnames';

const ConfirmEventWhere = ({ eventWhere }) => {

    const layout = eventWhere.map((data, i) => {

        // let classes = classnames('three columns confirm-new-event-title where', {
        //     'hide': i > 0
        // });

        return (
            <View
            //className="poll-option-container row"
            key={ i }
            >
                <View
                //className={ classes }
                >
                  <Text>Where</Text>
                </View>
                <View
                //className="nine columns confirm-new-event where"
                >
                  <Text
                  //className="placeName"
                  >
                    { data.placeName || "TBC" }
                  </Text>
                  <Text
                  //className="eventWhere-placeAddress"
                  >
                    { data.placeAddress }
                  </Text>
                </View>
            </View>
        );
    });

    return (
        <View
        //className="confirm-list"
        >
            { layout }
        </View>
    );
};

export default ConfirmEventWhere;
