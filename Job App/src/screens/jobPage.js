import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as theme from '../constants/lightTheme';
import Header from '../components/header';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default function JobPage ({ route }) {
    const {company, poste, person, location, experience } = route.params;
    return (
      <View style={styles.container}>
        <Header left="keyboard-backspace" center={company} />
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={{
              latitude: 36.8548991,
              longitude: 10.2514269,
              latitudeDelta: 0.09,
              longitudeDelta: 0.035,
            }}> 
              <MapView.Marker
                coordinate={{
                  latitude: 36.8548991,
                  longitude: 10.2514269,
                }}
                title="Etikks"
                description="Agence Com" />
          </MapView>
        </View>
        <ScrollView style={styles.bodyContainer}>
          <Text style={styles.detailsText}>Etikks est une agence de communication atypique fondée sur l’idée d’une communication moderne, innovante et consciente.</Text>
          <View style={styles.itemContainer}>
              <Icon name="person" color={theme.colors.primaryBlue} size={26} />
              <Text style={styles.itemText}> {person}</Text>
          </View>
          <View style={styles.itemContainer}>
              <Icon name="place" color={theme.colors.primaryBlue} size={26} />
              <Text style={styles.itemText}> {location}</Text>
          </View>
          <View style={styles.itemContainer}>
              <Icon name="work" color={theme.colors.primaryBlue} size={26} />
              <Text style={styles.itemText}> {experience}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Postuler</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  mapContainer: {
    height: 250,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bodyContainer: {
    padding: 10
  },
  detailsText: {
    fontSize: theme.sizes.h5,
  },
  itemContainer: {
      flexDirection: 'row',
      marginTop: 10,
  },
  itemText: {
      fontSize: theme.sizes.h4,
      color: theme.colors.black
  },
  buttonContainer: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primaryBlue
  },
  buttonText: {
    fontSize: theme.sizes.h3,
    color: theme.colors.white,
  },
});
