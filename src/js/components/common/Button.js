import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  buttonStyle: PropTypes.string,
  textStyle: PropTypes.string,
  children: PropTypes.element
};

export default function Button ({ onPress, children, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = propTypes;
