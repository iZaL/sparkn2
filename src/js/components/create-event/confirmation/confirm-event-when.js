import React from 'react';
import classnames from 'classnames';
import formatDate from '../../../lib/formatDate.js';

const ConfirmEventWhen = ({ eventWhen }) => {

    const layout = eventWhen.map((data, i) => {

        // let classes = classnames('three columns confirm-new-event-title when', {
        //     'hide': i > 0
        // });

        return (
            <View
            //className="poll-option-container row"
            key={ i }
            >
                <View
                //className={ classes }
                >When
                </View>
                <View
                //className="nine columns confirm-new-event when"
                >
                    <View
                    //className="row"
                    >
                        <Text
                        //className="date"
                        >
                            { formatDate(data.date, true) || "TBC" }
                        </Text>
                        <Text
                        //className="time"
                        >
                            { data.time || "TBC" }
                        </Text>
                    </View>
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

export default ConfirmEventWhen;
