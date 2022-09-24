import {create} from 'apisauce';
import authStorage from '../utils/authStorage';

const baseURL = 'http://192.168.152.233:9000/api';
// const baseURL = 'https://medcab-server-v2.herokuapp.com/api';

const apiClient = create({
  baseURL,
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) {
    return;
  }
  request.headers.Authorization = authToken;
});

export {apiClient};
