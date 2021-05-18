import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  NativeModules,
  LayoutAnimation,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {FavouritesCntxt} from '../../../App';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const width100 = Dimensions.get('screen').width;

type Props = {
  name: string;
  thumb: string;
  cuisines: string;
  user_rating: {
    rating_color: string;
    aggregate_rating: string;
  };
  id: string;
};
const Card: React.FC<Props> = ({name, thumb, cuisines, user_rating, id}) => {
  const {Favourites, increment} = React.useContext(FavouritesCntxt);
  // const[themeMode, setThemeMode] =React.useContext(FavouritesCntxt);
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnails} source={{uri: thumb}} />
      <View style={styles.content}>
        <Text
          style={{
            backgroundColor: '#' + user_rating.rating_color,
            ...styles.rating,
          }}>
          {user_rating.aggregate_rating}
        </Text>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.subHeading}>{cuisines}</Text>
        <TouchableWithoutFeedback onPress={() => increment(id)}>
          <View style={styles.searchIconButton}>
            <Ionicons
              name={'ios-heart'}
              size={50}
              color={Favourites.indexOf(id) !== -1 ? 'red' : 'grey'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
  },
  thumbnails: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
  subHeading: {
    fontSize: 16,
  },
  rating: {
    position: 'absolute',
    left: 15,
    top: -40,
    padding: 5,
    borderRadius: 10,
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  searchIconButton: {
    position: 'absolute',
    right: 10,
    top: -35,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default Card;
