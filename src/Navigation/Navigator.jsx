import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddQueryScreen from '../Screens/AddQueryScreen';
import LoginScreen from '../Screens/LoginScreen';
import OTPScreen from '../Screens/OTPScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import UrlOpenerScreen from '../Screens/UrlOpenerScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#ff9700'},
        }}>
        <Stack.Screen
          name="mainhome"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addquery"
          component={AddQueryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="otp" component={OTPScreen} />
        <Stack.Screen name="webopener" component={UrlOpenerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
