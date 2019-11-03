import React, {Component} from 'react';
import {
  View,
  UIManager,
  StyleSheet,
} from 'react-native';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

UIManager.setLayoutAnimationEnabledExperimental(true);

import{ CreditCardInput } from 'react-native-credit-card-input';

export default class App extends Component {
  _onFocus = field => console.log('focusing', field)

  _onChange = formData => console.log(JSON.stringify(formData, null , ' '))
  render() {
    return (
      <View style={styles.container}>
        <CreditCardInput
          autoFocus
          requireName={true}
          requireCVC={true}
          requirePostalCode={true}
          validColor="black"
          invalidColor="red"
          placeholderColor="darkgray"
          labelStyle={{color: 'black', fontSize: 12}}
          inputStyle={{color: 'black', fontSize: 16}}
          onFocus={this._onFocus}
          onChange={this._onChange}
        />
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
});
