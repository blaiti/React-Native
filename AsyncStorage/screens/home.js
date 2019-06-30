import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as theme from '../constants/themes';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  _logOut = async () => {
    try {
      AsyncStorage.removeItem('Email');
      this.props.navigation.navigate('Login');
    }
    catch(error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.emailTxt}>Hello</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={() => this._logOut()}>
            <Text style={styles.btnTxt}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailTxt: {
      color: theme.colors.white,
      fontWeight: 'bold'
    },
    btnContainer: {
      backgroundColor: theme.colors.white,
      padding: 15,
      marginTop: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
  btnTxt: {
      color: theme.colors.blue,
      fontWeight: 'bold',
  },
});