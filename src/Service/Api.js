import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE = {
  baseURL: 'https://careermaps.live/',
  login: {
    route: 'auth/send-otp',
    method: 'POST',
  },
  signup: {
    route: 'auth/register-student',
    method: 'POST',
  },
  verifyOTP: {
    route: 'auth/otp-login',
    method: 'POST',
  },
  getPorfile: {
    route: 'api/account',
    method: 'GET',
  },
  updateProfile: {
    route: 'auth/update-student',
    method: 'PUT',
  },
  queryList: {
    route: 'api/query',
    method: 'GET',
  },
  queryAdd: {
    route: 'api/query',
    method: 'POST',
  },
  getQuery: {
    route: 'api/query',
    method: 'GET',
  },
  addQuery: {
    route: 'api/query',
    method: 'POST',
  },
  getPlans: {
    route: 'api/plan',
    method: 'GET',
  },
};

export const Call = async (URL, payload = null, urlParam = '') => {
  const storedToken = await AsyncStorage.getItem('token');
  console.log(urlParam)
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
  console.log(API_BASE.baseURL + API_BASE[URL].route + '/' + urlParam, data, headers);
  const response = axios({
    method: API_BASE[URL].method,
    url: API_BASE.baseURL + API_BASE[URL].route + '/' + urlParam,
    data,
    headers,
  });

  return response;
};
