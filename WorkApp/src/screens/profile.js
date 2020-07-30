import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import * as theme from '../constants/lightTheme';
import Header from '../components/header';

export default function Profile ()  {
    return (
      <View style={styles.container}>
        <Header center='Profil' />
        <View style={styles.container}></View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
});
