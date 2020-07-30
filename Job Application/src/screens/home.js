import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import * as theme from '../constants/lightTheme';

import { SearchBar } from 'react-native-elements';

import JobCard from '../components/jobCard';

const jobs = [
  {
    id:'1',
    company: '3oulti',
    poste: 'Community Manager',
    person: 'H/F',
    location: 'Tunis',
    experience: '+2 ans',
  },
  {
    id: '2',
    company: 'Etikks',
    poste: 'Concepteur Graphique',
    person: 'H/F',
    location: 'Tunis',
    experience: '+2 ans',
  },
  
  {
    id: '3',
    company: 'Interise',
    poste: 'Référenceur Web',
    person: 'H/F',
    location: 'Tunis',
    experience: '+2 ans',
  },
  {
    id: '4',
    company: 'Tuntek',
    poste: 'Rédacteur Web',
    person: 'H/F',
    location: 'Tunis',
    experience: '+2 ans',
  },
  {
    id: '5',
    company: 'Etikks',
    poste: 'Concepteur UX',
    person: 'H/F',
    location: 'Tunis',
    experience: '+2 ans',
  },
  {
    id: '6',
    company: 'Interise',
    poste: 'Concepteur UI',
    person: 'H/F',
    location: 'Tunis',
    experience: '+2 ans',
  },
]

export default function Home({navigation})  {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar
          placeholder="Recherche..."
          lightTheme={true}
        />
      </View>
      <View style= {styles.listView}>
        <FlatList 
          data={jobs}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('JobPage', { 
                company: item.company,
                poste: item.poste,
                person: item.person,
                location: item.location,
                experience: item.experience })}>

                <JobCard item={item} />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  listView: {
    paddingBottom: 70,
  }
});
