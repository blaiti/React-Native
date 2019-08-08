import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as theme from '../constants/theme';

export default class ChatItem extends React.Component {
    ShowAvatar(message) {
        if (message.author.id == 1) {
            return <View/>
        }
        else {
            return (
                <Avatar 
                    rounded
                    source= {{ uri : message.author.avatar }} />
            )
        }
    }
    render() {
        const message = this.props.message;
        const userID = message.author.id == 1;
        const textContainerExtra = userID ? styles.textContainerRight : styles.textContainerLeft;
        return (
            <View style={styles.messageContainer}>
                {this.ShowAvatar(message)}

                <View style={[styles.textContainer, textContainerExtra]}>
                    <Text style={styles.message}>{message.text}</Text>
                </View>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        padding: 20
    },
    textContainer: {
        borderRadius: 5,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
        marginRight: 10
    },
    textContainerLeft: {
        alignItems: 'flex-start',
        backgroundColor: theme.colors.silver
    },
    textContainerRight: {
        alignItems: 'flex-end',
        backgroundColor: theme.colors.blueBaby
    },
    message: {
        fontSize: 16,
    }
  });
  