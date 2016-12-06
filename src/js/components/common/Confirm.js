import React, { PropTypes } from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const propTypes = {
  visible: PropTypes.bool,
  deleteEvent: PropTypes.func,
  closeModal: PropTypes.func,
  children: PropTypes.element
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export default function Confirm ({ children, visible, deleteEvent, closeModal }) {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={deleteEvent}>Delete</Button>
          <Button onPress={closeModal}>Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

Confirm.propTypes = propTypes;
