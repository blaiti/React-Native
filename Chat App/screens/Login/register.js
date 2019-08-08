import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as theme from '../../constants/theme';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  Register() {
    const {name, email, password} = this.state
    if (name.length != 0 && email.length != 0 && password.length != 0)
    {
      alert('Hello !');
    }
    else {
      this.props.navigation.navigate('HomeScreens');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputForm}
          placeholder='Name..'
          placeholderColor='#bdc3c7'
          autoCorrect={false}
          keyboardType='default'
          autoCompleteType='email'
          onSubmitEditing={() => this.emailInput.focus()}
          onChangeText={(name) => this.setState({name})} />

        <TextInput
          style={styles.inputForm}
          placeholder='Email..'
          placeholderColor='#bdc3c7'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          autoCompleteType='email'
          ref={(input) => this.emailInput = input}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(email) => this.setState({email})} />

        <TextInput
          style={styles.inputForm}
          placeholder='Password..'
          placeholderColor='#bdc3c7'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          keyboardType='default'
          autoCompleteType='password'
          ref={(input) => this.passwordInput = input}
          onChangeText={(password) => this.setState({password})} />

        <TouchableOpacity style={styles.RegisterButton} onPress={() => this.Register()}>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.clickTextButton}>
          <TouchableOpacity>
              <Text style={styles.clickText} onPress={() => this.props.navigation.navigate('Login')}>Have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    padding: 20
  },
  inputForm:
  {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 10,
    color: theme.colors.lightBlack,
    fontSize: 15,
    marginBottom: 10,
    borderTopColor: theme.colors.lightBlack,
    borderTopWidth: 1,
    borderBottomColor: theme.colors.lightBlack,
    borderBottomWidth: 1,
    borderLeftColor: theme.colors.lightBlack,
    borderLeftWidth: 1,
    borderRightColor: theme.colors.lightBlack,
    borderRightWidth: 1,
  },
  RegisterButton:
  {
    backgroundColor: theme.colors.blueAzure,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  RegisterText:
  {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  clickTextButton:
  {
    marginTop: 20,
  },
  clickText:
  {
    color: theme.colors.lightBlack,
    fontSize: 15,
    fontWeight: 'bold'
  },
});
