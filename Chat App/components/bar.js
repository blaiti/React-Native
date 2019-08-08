import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as theme from '../constants/theme';

export default class Bar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:0.5,
    backgroundColor: theme.colors.silver,
  },
});
  