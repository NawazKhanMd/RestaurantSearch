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
import data from '../Home/Data/data.json';

import {FavouritesCntxt} from '../../App';

const emptyImage = require('../../assets/images/noRestaurants.png');
export type Props = {};

const RightScreen: React.FC<Props> = () => {
  const renderItem = ({item}: any) => <Card {...item.restaurant} />;
  const {Favourites} = React.useContext(FavouritesCntxt);
  const [favRest, setFav] = React.useState([]);
  React.useEffect(() => {
    setFav(
      data.filter((item: any) => Favourites.indexOf(item.restaurant.id) !== -1),
    );
  }, [Favourites]);
  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        {favRest.length > 0 && (
          <FlatList
            data={favRest}
            horizontal={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
        {favRest.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.infoText}>No favorite restaurants</Text>
            <ImageBackground style={styles.image} source={emptyImage} />
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

export default RightScreen;
