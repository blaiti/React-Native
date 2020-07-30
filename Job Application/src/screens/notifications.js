import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

import { ListItem } from 'react-native-elements';

import * as theme from '../constants/lightTheme';
import Header from '../components/header';

const notifs = [
  {
    company: '3oulti',
    picture: 'https://www.interise.tn/wp-content/uploads/2020/05/1.png',
    message: 'Si vous êtes intéressé de la community management, ce poste est fait pour vous..'
  },
  {
      company: 'Etikks',
      picture: 'https://www.interise.tn/wp-content/uploads/2020/05/Etikks.jpg',
      message: 'Vous êtes accepté pour passer un entretien jeudi prochain.'
  },
  
  {
    company: 'Interise',
    picture: 'https://www.interise.tn/wp-content/uploads/2020/04/Blue-Logo-1.jpg',
    message: 'Vous êtes accepté pour passer un entretien mardi prochain.'
  },
  {
    company: 'Tuntek',
    picture: 'https://www.interise.tn/wp-content/uploads/2019/11/Tuntek.jpg',
    message: 'N\'hésitez pas à envoyer votre CV à Tuntek.'
  },
  {
      company: 'Etikks',
      picture: 'https://www.interise.tn/wp-content/uploads/2020/05/Etikks.jpg',
      message: 'Votre CV a été envoyé automatiquement à Etikks.'
  },
  {
      company: 'Interise',
      picture: 'https://www.interise.tn/wp-content/uploads/2020/04/Blue-Logo-1.jpg',
      message: 'Un nouveau offre d\'emploi qui peut-être vous intéresse.'
  },
]

export default function Notifications ()  {
    return (
      <View style={styles.container}>
        <Header center='Notifications' />
        <ScrollView>
          {
            notifs.map((item, i) => (
              <ListItem
                key={i}
                title={item.company}
                subtitle={item.message}
                leftAvatar={{ source: { uri: item.picture } }}
                bottomDivider
              />
            ))
          }
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
});
