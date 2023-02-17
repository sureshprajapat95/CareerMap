import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: async token => {},
  logout: () => {},
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();

  async function authenticate(token) {
    await AsyncStorage.setItem('token', token);
    setAuthToken(token);
    return true;
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
