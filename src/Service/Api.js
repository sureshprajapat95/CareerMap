import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE = {
  baseURL: 'https://careermaps.live/',
  login: {
    route: 'auth/send-otp',
    method: 'POST'
  },
  signup: {
    route: 'auth/register-student',
    method: 'POST'
  },
  verifyOTP: {
    route: 'auth/otp-login',
    method: 'POST'
  },
};

export const Call = async (URL, payload = null, params = null) => {
  const storedToken = await AsyncStorage.getItem('token');
  let data = {};
  let headers = {};
  if (storedToken) {
    headers = {AUTHORIZATION: `Bearer ${storedToken}`};
  }
  if (payload) {
    data = {
      ...payload,
    };
  }
  console.log(API_BASE.baseURL + API_BASE[URL].route, data, headers);
  const response = axios({
    method: API_BASE[URL].method,
    url: baseURL + API_BASE[URL].route,
    data,
    headers,
  });

  return response;
};
