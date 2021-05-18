/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LeftScreen from './src/Left';
import HomeScreen from './src/Home';
import RightScreen from './src/Right';

export type Props = {};
const Tab = createBottomTabNavigator();
export const FavouritesCntxt = React.createContext({});
export const App: React.FC<Props> = () => {
  const [Favourites, updateFavourites] = React.useState([]);
  function increment(value: string) {
    let updatedList = Array.from(Favourites);
    let index = Favourites.indexOf(value);
    if (index === -1) {
      updatedList.push(value);
    } else {
      updatedList.splice(index, 1);
    }
    updateFavourites(updatedList);
  }
  return (
    <NavigationContainer>
      <FavouritesCntxt.Provider value={{Favourites, increment}}>
        <Tab.Navigator
          initialRouteName="Restaurants"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Restaurants') {
                iconName = focused ? 'bonfire' : 'bonfire-outline';
              } else if (route.name === 'Favourites') {
                iconName = focused
                  ? 'heart-circle-sharp'
                  : 'heart-circle-outline';
              } else if (route.name === 'Empty') {
                iconName = focused ? 'pizza' : 'pizza-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            keyboardHidesTabBar: true,
          }}>
          <Tab.Screen name="Empty" component={LeftScreen} />
          <Tab.Screen name="Restaurants" component={HomeScreen} />
          <Tab.Screen name="Favourites" component={RightScreen} />
        </Tab.Navigator>
      </FavouritesCntxt.Provider>
    </NavigationContainer>
  );
};
