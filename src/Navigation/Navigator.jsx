import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen';
import OTPScreen from '../Screens/OTPScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#ff9700'},
        }}>
        <Stack.Screen
          name="mainhome"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="otp" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
