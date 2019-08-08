import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Bar from '../../components/bar';
import * as theme from '../../constants/theme';


const list = [
  {
    title: 'Account',
    icon: 'person'
  },
  {
    title: 'Discussions',
    icon: 'message'
  },
  {
    title: 'notifications',
    icon: 'notifications'
  },
  {
    title: 'help',
    icon: 'error'
  },
  {
    title: 'invite friends',
    icon: 'group-add'
  },
]

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ translucent: true }}
          backgroundColor='#ffffff'
          leftComponent={{text: 'Profile', style: { color: '#000000', fontSize: 20 } }}
          rightComponent={{ icon: 'settings', color: '#000000' }} />
        <Bar/>
        
        <View style={styles.imageContainer}>
          <Image
              style={styles.imageProfile}
              source={{ uri : 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} />
          <View style={{padding: 5}}>
            <Text style={styles.Name}>Skander Blaiti</Text>
            <Text style={styles.username}>@skanderblaiti</Text>
          </View>
        </View>

        <View style={styles.userSettings}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
              />
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imageProfile: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  Name: {
    fontSize: 15,
    color: theme.colors.lightBlack,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username: {
    fontSize: 11,
    color: theme.colors.silver,
    textAlign: 'center',
  },
  userSettings: {
    flex: 4,
  }
});
  
