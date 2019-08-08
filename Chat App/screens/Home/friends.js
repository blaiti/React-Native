import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Bar from '../../components/bar';
import * as theme from '../../constants/theme';

const friends = [
  {
    name: 'User 1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'UX/UI Designer'
  },
  {
    name: 'User 2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Mobile Developer'
  },
]

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Header
            statusBarProps={{ translucent: true }}
            backgroundColor='#ffffff'
            leftComponent={{ icon: 'keyboard-backspace', color: '#000000' }}
            centerComponent={{ text: 'Friends', style: { color: '#000000', fontWeight: 'bold' } }}
            rightComponent={{ icon: 'person-add', color: '#000000' }} />

            <Bar/>

          <View style={styles.friendsList}>
            {
              friends.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.subtitle}
                />
              ))
            }
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: theme.colors.white,
  },
  friendsList: {
    flex:1,
    padding: 5
  }
});
