import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import * as theme from '../constants/lightTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Icon name={props.left} color={theme.colors.white} size={26} />
        </View>

        <View style={styles.center}>
            <Text style={styles.headerText}>{props.center}</Text>
        </View>

        <View style={styles.right}>
            <Text>{props.right}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: theme.colors.primaryBlue,
  },
  left: {
    flex: 1,
    padding: 5,
    justifyContent: 'center'
  },
  center: {
    flex: 4,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
      color: theme.colors.white,
      fontSize: theme.sizes.h3,
      fontWeight: '900'
  }
});

export default Header;