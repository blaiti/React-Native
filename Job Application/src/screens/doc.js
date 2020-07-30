import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import * as theme from '../constants/lightTheme';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

export default function Doc(props)  {
    const { navigation } = props
    return (
      <View style={styles.container}>
            <View>
                <ImageBackground
                    source={require('../images/docBackground.png')}
                    resizeMode={'cover'}
                    style={styles.backgroundImage} >
                        <Image
                            source={require('../images/blueLogo.png')}
                            resizeMode={'cover'}
                            style={{ width: 70, height: 70 }} />
                </ImageBackground>
            </View>

            <View style={styles.blockContainer}>
                <Text style={styles.helloText}>Bonjour,</Text>
                <Text style={styles.joinUsText}>Rejoignez-nous et trouvez le travail de vos rêves</Text>

                <View style={styles.butttonsView}>
                    <TouchableOpacity 
                        style={styles.registerButton}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Rejoignez-Nous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>S'identifier</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.passwordButton}>
                        <Text style={styles.passwordText}>Mot de passe oublié?</Text>
                    </TouchableOpacity>
                </View>
            </View>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primaryBlue
    },
    backgroundImage: {
        paddingTop: 90,
        width: imageWidth, 
        height: imageWidth - 40,
        alignItems: 'center',
    },
    blockContainer: {
        flex: 1,
        padding: 20
    },
    helloText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h1,
        color: theme.colors.white,
    },
    joinUsText: {
        marginTop: 10,
        fontWeight: '800',
        fontSize: theme.sizes.h2,
        color: theme.colors.white,
    },
    butttonsView: {
        marginTop: 40
    },
    registerButton: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.white
    },
    loginButton: {
        padding: 15,
        marginTop: 13,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white
    },
    registerText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.white,
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.primaryBlue,
    },
    passwordButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    passwordText: {
        marginTop: 5,
        fontSize: theme.sizes.h5,
        color: theme.colors.white
    }
});
