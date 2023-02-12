import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import Button from '../Components/Button';
import Hamburger from '../Utils/Icons/Hamburger';
import Home from '../Utils/Icons/Home';
import Info from '../Utils/Icons/Info';
import Privacy from '../Utils/Icons/Privacy';
import Terms from '../Utils/Icons/Terms';
import {Colors} from '../Utils/Colors';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <MyDrawer />;
};

export default DrawerNavigator;

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        headerLeft: props => (
          <Button
            onPress={navigation.toggleDrawer}
            buttonStyle={{
              marginLeft: 20,
              width: 50,
              height: 35,
              borderRadius: 10,
            }}
            icon={<Hamburger fill={Colors.light} />}></Button>
        ),
        headerStyle: {
          elevation: 50,
          shadowOpacity: 50,
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: Colors.primary},
        drawerStyle: {
          backgroundColor: Colors.light,
          width: '70%',
        },
        drawerActiveTintColor: Colors.primary,
        drawerLabelStyle: {marginLeft: -20},
      })}>
      <Drawer.Screen
        name="TabHome"
        component={TabNavigator}
        options={{
          drawerIcon: config => (
            <Home width="20px" height="20px" fill={Colors.primary} />
          ),
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: Colors.primary,
          height: 150,
          marginTop: -10,
          marginBottom: 50,
          elevation: 20,
        }}></View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Profile"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
        icon={() => (
          <Privacy width="20px" height="20px" fill={Colors.primary} />
        )}
        labelStyle={{marginLeft: -20}}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => {
          props.navigation.navigate('webopener', {
            uri: 'https://reactnavigation.org/docs/params/',
            title: 'Privacy Policy',
          });
        }}
        icon={() => (
          <Privacy width="20px" height="20px" fill={Colors.primary} />
        )}
        labelStyle={{marginLeft: -20}}
      />
      <DrawerItem
        label="Terms & Conditions"
        onPress={() => {
          props.navigation.navigate('webopener', {
            uri: 'https://reactnavigation.org/docs/params/',
            title: 'Terms & Conditions',
          });
        }}
        icon={() => <Terms width="20px" height="20px" />}
        labelStyle={{marginLeft: -20}}
      />
      <DrawerItem
        label="About App"
        onPress={null}
        icon={() => <Info width="20px" height="20px" />}
        labelStyle={{marginLeft: -20}}
      />
    </DrawerContentScrollView>
  );
}
