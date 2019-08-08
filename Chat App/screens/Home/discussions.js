import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import * as theme from '../../constants/theme';
import { Header, ListItem } from 'react-native-elements';
import Bar from '../../components/bar';

const list = [
  {
    name: 'User 1',
    username: 'User1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    message: 'Hello !',
  },
  {
    name: 'User 2',
    username: 'User2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    message: 'Hello Skander !',
  },
  {
    name: 'User 3',
    username: 'User3',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    message: 'Contacty is a mobile application that provides an instant messaging system.',
  },
  {
    name: 'User 4',
    username: 'User4',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    message: 'Don\'t need to save your discussions.',
  },
]

export default class Messages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          statusBarProps={{ translucent: true }}
          backgroundColor='#ffffff'
          leftComponent={{text: 'Messages', style: { color: '#000000', fontSize: 20 } }}
          rightComponent={{ icon: 'inbox', color: '#000000' }} />
        <Bar/>
        <ScrollView style={styles.messagesList}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={
                  <Text style={{fontWeight: 'bold', color: '#000000'}}>{l.name}</Text>
                }
                subtitle={l.message}
                onPress={() => this.props.navigation.navigate('Conversation', {name: l.name, avatar: l.avatar_url, message: l.message, username: l.username})}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  messagesList: {
    flex:1,
    padding: 5
  }
});
  