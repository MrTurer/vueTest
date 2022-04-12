import axios from 'axios';
import runtimeConfig from '@/common/runtime-config';

axios.interceptors.request.use(
  config => {
    config.params = {...config.params};
    refreshAuthorizationHeader();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export function configAxios() {
  axios.defaults.baseURL = runtimeConfig.apiBaseUrl;
}

const authAxios = axios.create({
  baseURL: runtimeConfig.apiAuthUrl
});

export default function refreshAuthorizationHeader() {
  const token = localStorage.getItem('token'); 
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    authAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
    delete authAxios.defaults.headers.common['Authorization'];
  }
}

refreshAuthorizationHeader();

export { authAxios }