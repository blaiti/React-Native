import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as theme from '../constants/lightTheme';


export default function Register(props)  {
    const { navigation } = props;

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    });

    const textInputChange = (val) => {
        var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if( regex.test(val.trim()) ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handleValidUser = (val) => {
        var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if( regex.test(val.trim()) ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if( val.trim() == data.password.trim() ) {
            setData({
                ...data,
                passwordConfirm: val,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                passwordConfirm: val,
                isValidConfirmPassword: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
            <StatusBar backgroundColor='#4C82DE' barStyle="light-content"/>

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Rejoignez-Nous !</Text>
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.footerContainer}>
                {/* Username input */}
                <Text style={styles.footerText}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome name="envelope" color={theme.colors.silver} size={20} />

                    <TextInput 
                        autoCapitalize="none"
                        placeholder="Email.."
                        style={styles.textInputContainer}
                        placeholderTextColor={theme.colors.gray}
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)} />

                    {data.check_textInputChange ? 
                        <Animatable.View animation="bounceIn" >
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    : null}

                    </View>
                    { data.isValidUser ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsgtext}>Vous devez saisir un e-mail valide.</Text>
                    </Animatable.View>
                    }

                    {/* Password input */}
                    <Text style={styles.footerText}>Mot de passe</Text>

                    <View style={styles.action}>
                        <Feather name="lock" color={theme.colors.silver} size={20} />

                        <TextInput 
                            autoCapitalize="none"
                            placeholder="Mot de passe.."
                            style={styles.textInputContainer}
                            placeholderTextColor={theme.colors.gray}
                            onChangeText={(val) => handlePasswordChange(val)}
                            secureTextEntry={data.secureTextEntry ? true : false} />

                        <TouchableOpacity onPress={updateSecureTextEntry} 
                        >
                            {data.secureTextEntry ? 
                                <Feather name="eye-off" color="grey" size={20} />
                            :
                                <Feather name="eye" color="grey" size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                    { data.isValidPassword ? null : 
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Le mot de passe doit comporter 8 caractères.</Text>
                        </Animatable.View>
                    }

                    {/* Password confirm input */}
                    <Text style={styles.footerText}>Confirmez votre mot de passe</Text>

                    <View style={styles.action}>
                        <Feather name="lock" color={theme.colors.silver} size={20} />

                        <TextInput 
                            autoCapitalize="none"
                            placeholder="Mot de passe.."
                            style={styles.textInputContainer}
                            placeholderTextColor={theme.colors.gray}
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                            secureTextEntry={data.secureTextEntry ? true : false} />

                        <TouchableOpacity onPress={updateSecureTextEntry} 
                        >
                            {data.secureTextEntry ? 
                                <Feather name="eye-off" color="grey" size={20} />
                            :
                                <Feather name="eye" color="grey" size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                    { data.isValidConfirmPassword ? null : 
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Les deux mot de passe doivent être compatibles.</Text>
                        </Animatable.View>
                    }

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.signInButton, { backgroundColor: theme.colors.primaryBlue }]}
                        onPress={() => {loginHandle( data.username, data.password )}}
                    >
                        <Text style={[styles.buttonText, { color:theme.colors.white }]} >
                            Créer un compte
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={[styles.signInButton, {
                            borderColor: theme.colors.primaryBlue,
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.buttonText, { color: theme.colors.primaryBlue }]}>
                            S'identifier
                        </Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primaryBlue
    },
    headerContainer: {
        flex: 1,
        paddingBottom: 50,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    headerText: {
        fontSize: theme.sizes.h1,
        fontWeight: 'bold',
        color: theme.colors.white,
    },
    footerContainer: {
        flex: 3,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: theme.colors.white,
    },
    footerText: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.gray
    },
    action: {
        marginTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray
    },
    textInputContainer: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        fontSize: theme.sizes.h5,
        color: theme.colors.gray,
    },
    errorMsgText: {
        color: '#FF0000',
        fontSize: 14,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    signInButton: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
