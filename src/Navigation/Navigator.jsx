import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AuthContext} from '../Context/auth-context';
import AddQueryScreen from '../Screens/AddQueryScreen';
import LoginScreen from '../Screens/LoginScreen';
import OTPScreen from '../Screens/OTPScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import UrlOpenerScreen from '../Screens/UrlOpenerScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const authCtx = useContext(AuthContext);

  React.useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }
    fetchToken();
  }, []);

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
        {!authCtx.isAuthenticated && (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignUpScreen} />
            <Stack.Screen name="otp" component={OTPScreen} />
          </>
        )}
        <Stack.Screen name="webopener" component={UrlOpenerScreen} />
        <Stack.Screen name="payment" component={PaymentScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
