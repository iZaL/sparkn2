import React, { PropTypes } from 'react';
import { View } from 'react-native';

const propTypes = {
  style: PropTypes.string, // check this
  children: PropTypes.element
};

export default function CardSection (props) {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  );
}

CardSection.propTypes = propTypes;


// const styles = {
//   containerStyle: {
//     borderBottomWidth: 1,
//     padding: 5,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start',
//     flexDirection: 'row',
//     borderColor: '#ddd',
//     position: 'relative'
//   }
// };
