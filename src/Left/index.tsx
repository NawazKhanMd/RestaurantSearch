import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type Props = {};
const emptyImage = require('../../assets/images/notingHere.png');
const LeftScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={emptyImage}>
        <Text style={styles.infoText}>This is the left screen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  image: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  infoText: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 10,
    fontSize: 17,
  },
});

export default LeftScreen;
