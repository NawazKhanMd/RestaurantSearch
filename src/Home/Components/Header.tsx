import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  NativeModules,
  LayoutAnimation,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const width100 = Dimensions.get('screen').width;

type Props = {
  search: any;
};
const Header: React.FC<Props> = ({search}) => {
  const [showInput, setInput] = React.useState(false);
  const setSearch = () => {
    LayoutAnimation.easeInEaseOut();
    setInput(!showInput);
    if (showInput) {
      search(null);
    }
  };
  return (
    <View style={styles.container}>
      {!showInput && <Text style={styles.heading}>Find Restaurants</Text>}
      {showInput && (
        <TextInput
          onChangeText={search}
          autoFocus={true}
          style={styles.input}
        />
      )}
      <View style={styles.searchIconContainer}>
        <TouchableWithoutFeedback onPress={setSearch}>
          <View style={styles.searchIconButton}>
            <Ionicons
              name={showInput ? 'ios-close-circle-outline' : 'search'}
              size={20}
              color={'white'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
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
  },
  searchIconContainer: {
    marginTop: -40,
    width: width100,
    alignItems: 'flex-end',
  },
  searchIconButton: {
    padding: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    marginBottom: -10,
    borderRadius: 20,
    width: width100 - 100,
    backgroundColor: 'white',
  },
  flx1: {
    flex: 1,
  },
});

export default Header;
