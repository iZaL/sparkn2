import React, { Component } from 'react';
import { View, Image } from 'react-native';
import autocompleteHelper from '../../lib/autocomplete-helper.js';
import Input from '../common/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../common';
import styles from '../../style.js';

class AutocompleteInput extends Component {

    // componentDidMount () {
    //
    //     const inputDOMElement = document.getElementById(this.props.id);
    //
    //     let autocomplete = new google.maps.places.Autocomplete(inputDOMElement);
    //
    //     autocomplete.addListener('place_changed', () => {
    //
    //         let result = autocomplete.getPlace();
    //
    //         autocompleteHelper(result, (formattedName, formattedAddress) => {
    //
    //             this.props.handleChange(formattedName, formattedAddress);
    //         });
    //     });
    // }

    render () {
        const { handleChange, value, placeholder, id, inputKey, inputCount, removeInput } = this.props;

        return (
            <View style={styles.row}>

                <Input
                    ref={ (input) => {
                        if (input !== null && inputKey === inputCount - 1 && inputKey > 0) {
                            input.focus();
                        }
                    }}
                    onChange={ (e) => handleChange(e.target.value, "") }
                    ref="searchField"
                    id={ id }
                    value={ value }
                    type="text"
                    placeholder={ placeholder }
                />

                { (inputKey === 0) &&
                  <View />
                }
                { (inputKey !== 0) &&
                  <Button buttonStyle={styles.smallButtonStyle} onPress={ (e) => removeInput(inputKey) }>
                      <Icon name="times" size={14} color="gray" />
                  </Button>
                }
            </View>
        );
    }
}


export default AutocompleteInput;
