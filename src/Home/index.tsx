import * as React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from './Components/Card';
import Header from './Components/Header';
import data from './Data/data.json';

type Props = {};

const emptyImage = require('../../assets/images/noResults.png');

const HomeScreen: React.FC<Props> = () => {
  const [Data, setData] = React.useState(data);

  const renderItem = ({item}: any) => <Card {...item.restaurant} />;

  const handleSearch = (value: any) => {
    if (value === null) {
      setData(data);
    } else {
      let refinedList = data.filter(
        (item: any) =>
          item.restaurant.name.toLowerCase().indexOf(value.toLowerCase()) !==
          -1,
      );
      setData(refinedList);
    }
  };
  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
      <Header search={handleSearch} />
      <View style={styles.listContainer}>
        {Data.length > 0 && (
          <FlatList
            data={Data}
            horizontal={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
        {Data.length === 0 && (
          <View style={styles.emptyContainer}>
            <ImageBackground style={styles.image} source={emptyImage} />
            <Text style={styles.infoText}>No Results</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#518360',
  },
  listContainer: {
    backgroundColor: '#f7f7f7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#f7f7f7',
  },
  image: {
    height: 200,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  infoText: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 10,
    fontSize: 17,
  },
});

export default HomeScreen;
