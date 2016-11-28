import React from 'react';
import { View, Text } from 'react-native';

const Message = ({ text }) => {

    return (

        <View>
            <Text >
                { text }
            </Text>
        </View>
    );
};

export default Message;
