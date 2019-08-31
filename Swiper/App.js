import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.container} showsButtons={true} >
          <View style={styles.container}>
            <Image
              source={ require('./src/image1.jpg') } />
          </View>

          <View style={styles.container}>
            <Image
              source={ require('./src/image2.jpg') } />
          </View>

          <View style={styles.container}>
            <Image
              source={ require('./src/image3.jpg') } />
          </View>
        </Swiper>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
