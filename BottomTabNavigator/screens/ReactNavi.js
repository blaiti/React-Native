import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as theme from '../constants/themes';

export default class ReactNav extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image 
            style={styles.img}
            source={require ('../images/Navigation.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white
    },
    img: {
        width: 150,
        height: 150
    }
});