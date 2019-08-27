import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {
          // Gradient Color Background 
        }
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradientBackground,
              height: 1,
              bottom: (gradientHeight - i),
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1)
            }}
          />
        ))}

        {
          // Image Background
        }
        <ImageBackground 
          source={ require('./src/Wallpaper.png') }
          style={{ width: '100%', height: '50%' }} >

        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
