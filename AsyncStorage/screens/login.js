import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import * as theme from '../constants/themes';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    }
  }

  _storateData = async () => {
      try {
          await AsyncStorage.setItem('Email', this.state.email);
      }
      catch(error) {
          alert(error);
      }
  }

  _login() {
    const { email, password } = this.state;
    const correctEmail = 'contact@blaiti.com';
    const correctPassword = 'blaiti';

    if (email.length != 0 && password.length != 0) {
        if (email == correctEmail && password == correctPassword) {
            this._storateData();
            this.props.navigation.navigate('Home');
        }
        else {
            alert('Wrong informations !');
        }
    }
    else {
        alert('Missing informations !');
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={{width: 200, height: 50}}
                    source={ require('../images/Logo.png')} />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder='Email..'
                    placeholderTextColor='#3498db'
                    style={styles.inputTxt}
                    onChangeText={(email) => this.setState({email})} />

                <TextInput
                    placeholder='Password..'
                    placeholderTextColor='#3498db'
                    style={styles.inputTxt}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})} />

                <TouchableOpacity style={styles.btnContainer} onPress={() => this._login()}>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>

                <View style={styles.bottomTxtContainer}>
                    <Text style={styles.bottomTxt}>Heve an account?</Text>
                    <Text style={styles.bottomTxt}>Forget password?</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.blue,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 2,
        padding: 10
    },
    inputTxt: {
        backgroundColor: theme.colors.white,
        padding: 10,
        fontWeight: 'bold',
        marginBottom: 15,
        borderRadius: 10,
        color: theme.colors.blue
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
    bottomTxtContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    bottomTxt: {
        color: theme.colors.white,
        fontWeight: 'bold'
    }
});