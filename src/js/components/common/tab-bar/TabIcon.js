import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../style';
import colours from '../../../colours';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  iconName: PropTypes.string
};

const TabIcon = props => (
  <View style={styles.iconBar}>
    <Icon name={props.iconName} size={28} color={props.selected ? colours.blue : colours.white} />
    <Text
      style={{ color: props.selected ? colours.blue : colours.white }}
    >
      {props.title}
    </Text>
  </View>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
