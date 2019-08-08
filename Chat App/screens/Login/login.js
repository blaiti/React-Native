import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as theme from '../../constants/theme';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    Login() {
        const {email, password} = this.state
        if (email.length !== 0 && password.length !== 0)
        {
            this.props.navigation.navigate('HomeScreens');
        }
        else {
            alert('Missing Data !');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputForm}
                    placeholder='Email..'
                    placeholderColor='#bdc3c7'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    autoCompleteType='email'
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

                <TouchableOpacity style={styles.loginButton} onPress={() => this.Login()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.clickTextButton}>
                    <TouchableOpacity>
                        <Text style={styles.clickText} onPress={() => this.props.navigation.navigate('Register')}>Don't have an account?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.clickText}>Forget password?</Text>
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
    loginButton:
    {
        backgroundColor: theme.colors.blueAzure,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 20,
    },
    loginText:
    {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    clickTextButton:
    {
        marginTop: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    clickText:
    {
        color: theme.colors.lightBlack,
        fontSize: 15,
        fontWeight: 'bold'
    },
});
