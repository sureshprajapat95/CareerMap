import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import QueryScreen from '../Screens/QueryScreen';
import HomeScreen from '../Screens/HomeScreen';
import Home from '../Utils/Icons/Home';
import {Colors} from '../Utils/Colors';
import Query from '../Utils/Icons/Query';
import History from '../../History';
import ProfileScreen from '../Screens/ProfileScreen';
import Profile from '../Utils/Icons/Profile';
import TabButton from './Tabbutton';
import HistoryScreen from '../Screens/HistoryScreen';

const tabsData = [
  {route: 'Home', label: 'Home', icon: Home, component: HomeScreen},
  {route: 'Query', label: 'Query', icon: Query, component: QueryScreen},
  {route: 'History', label: 'History', icon: History, component: HistoryScreen},
  {
    route: 'Profile',
    label: 'Profile',
    icon: Profile,
    component: ProfileScreen,
  },
];


const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 10,
          backgroundColor: Colors.primaryAlfa
        },
        headerShown: false,
      }}>
      {tabsData.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
  },
});
