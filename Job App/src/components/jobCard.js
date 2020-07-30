import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as theme from '../constants/lightTheme';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function JobCard ({ item }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.itemTitle}> {item.company}</Text>
                    <Text style={styles.itemSubTitle}> {item.poste}</Text>
                </View>
                <Icon name="help-outline" color={theme.colors.white} size={26} />
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.itemContainer}>
                    <Icon name="person" color={theme.colors.white} size={26} />
                    <Text style={styles.itemText}> {item.person}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Icon name="place" color={theme.colors.white} size={26} />
                    <Text style={styles.itemText}> {item.location}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Icon name="work" color={theme.colors.white} size={26} />
                    <Text style={styles.itemText}> {item.experience}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: theme.colors.primaryBlue,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h2,
        color: theme.colors.white
    },
    itemSubTitle: {
        fontWeight: '900',
        fontSize: theme.sizes.h3,
        color: theme.colors.white
    },
    bodyContainer: {
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    itemText: {
        fontSize: theme.sizes.h4,
        color: theme.colors.white
    }
});