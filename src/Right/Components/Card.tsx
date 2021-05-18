import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {FavouritesCntxt} from '../../../App';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type Props = {
  name: string;
  thumb: string;
  cuisines: string;
  user_rating: {
    rating_color: string;
    aggregate_rating: string;
  };
};
const Card: React.FC<Props> = ({name, id}) => {
  const {increment} = React.useContext(FavouritesCntxt);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <TouchableWithoutFeedback onPress={() => increment(id)}>
        <View style={styles.searchIconButton}>
          <Ionicons name={'ios-remove-circle-sharp'} size={30} color={'red'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
  searchIconButton: {
    backgroundColor: 'white',
  },
});

export default Card;
