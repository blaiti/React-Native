import React from 'react';
import { StyleSheet, Keyboard, View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Header, Avatar, Icon } from 'react-native-elements';
import * as theme from '../constants/theme';
import Bar from '../components/bar';
import ChatItem from '../components/chatItem';

export default class Conversation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texte: '',
            messages: [
                { 
                    id: 1,
                    text: 'Hi',
                    author: {
                        id: 2,
                        username: 'ouael.amdouni',
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                    }
                },
                {
                    id: 2,
                    text: 'Hello !',
                    author: {
                        id: 1,
                        username: 'skander.blaiti',
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                    }
                },
            ]
        }
    }

    sendMessage() {
        const messages = this.state.messages;
        const newMessage = {
            text: this.state.texte,
            author: {
                id: 1,
                username: 'skander.blaiti',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
            }
        };
        messages.unshift(newMessage);
        this.setState({messages});
        Keyboard.dismiss();
        this.textInput.clear();
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item}) => (
        <ChatItem 
            message={item} />
    );

    render() {
        return (
            <View style={styles.container}>
                <Header
                    placement="left"
                    statusBarProps={{ translucent: true }}
                    backgroundColor='#ffffff'
                    leftComponent={{ icon: 'keyboard-backspace', color: '#000000', onPress: () => this.props.navigation.goBack() }}
                    centerComponent={
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Avatar
                            rounded
                            source={{ uri: this.props.navigation.state.params.avatar }} />
                            <Text style={{color: '#000000', fontSize: 20 }} >
                                    {this.props.navigation.state.params.name}
                            </Text>
                        </View>
                    }
                    rightComponent={{ icon: 'more-vert', color: '#000000' }} />
                <Bar/>

                <View style={styles.messageContainer}>
                    <FlatList 
                        inverted
                        data={this.state.messages}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        />
                </View>
                
                <Bar/>
                <View style={styles.sendForm}>
                    <View style={{flex: 6}}>
                        <TextInput
                            placeholder= 'Message..'
                            style={styles.messageInput}
                            returnKeyType='go'
                            placeholderTextColor= '#95a5a6'
                            ref={input => { this.textInput = input }}
                            onChangeText={(texte) => this.setState({texte})} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.sendMessage()}>
                            <Icon type='material' name='send' color='#000000' size={35} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
    },
    messageContainer: {
        flex: 1,
    },
    sendForm: {
        flexDirection: 'row',
        marginBottom: 0,
        padding: 5,
    },
    messageInput: {
        backgroundColor: theme.colors.clouds,
        color: theme.colors.black,
        borderRadius: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: theme.colors.silver
    }
  });
  