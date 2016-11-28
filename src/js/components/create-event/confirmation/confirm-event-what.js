import React from 'react';
import { View } from 'react-native';
import classnames from 'classnames';

const ConfirmEventWhat = ({ eventWhat }) => {

    const layout = Object.keys(eventWhat).map((data, i) => {

        // let classes = classnames('three columns confirm-new-event-title what', {
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
                What
                </View>
                <View
                //className="nine columns confirm-new-event what"
                key={ i }
                >
                    { eventWhat[data] || "TBC" }
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
