import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import Button from '../Components/Button';
import Hamburger from '../Icons/Hamburger';
import Home from '../Icons/Home';
import Privacy from '../Icons/Privacy';
import Profile from '../Icons/Profile';
import Terms from '../Icons/Terms';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Colors } from '../Utils/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <MyDrawer />
}

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
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.primary},
          
  
          drawerStyle: {
            backgroundColor: Colors.light,
            width: '70%',
          },
          drawerActiveTintColor: Colors.primary,
        })}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: config => (
              <Home width="20px" height="20px" fill={Colors.primary} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: config => <Profile width="20px" height="20px" />,
          }}
          activeTintColor={Colors.primary}
        />
      </Drawer.Navigator>
    );
  }

  

function CustomDrawerContent(props) {
    const logOutUser = () => {};
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: Colors.primary,
            height: 150,
            marginTop: -10,
            marginBottom: 50,
          }}></View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Privacy Policy"
          onPress={() => {}}
          icon={() => (
            <Privacy width="20px" height="20px" fill={Colors.primary} />
          )}
        />
        <DrawerItem
          label="Terms & Conditions"
          onPress={null}
          icon={() => <Terms width="20px" height="20px" />}
        />
      </DrawerContentScrollView>
    );
  }