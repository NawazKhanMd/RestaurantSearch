import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
};
const Header: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Favourites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  }
});

export default Header;
