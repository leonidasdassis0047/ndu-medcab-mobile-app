import {create} from 'apisauce';
import authStorage from '../utils/authStorage';

const DEV_HOST = '192.168.253.233';
// const baseURL = `http://${DEV_HOST}:9000/api`;
// const baseURL = 'https://medcab-server-v2.herokuapp.com/api';
const baseURL = 'https://api-medcab.herokuapp.com/api';

const apiClient = create({
  baseURL,
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) {
    return;
  }
  request.headers.Authorization = `Bearer ${authToken}`;
});

export {apiClient};
