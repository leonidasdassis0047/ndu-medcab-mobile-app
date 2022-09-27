import {apiClient} from '.';

const RESOURCE_ROUTE = '/auth';

const signIn = (userDetails: {email: string; password: string}) =>
  apiClient.post<string>(RESOURCE_ROUTE + '/signin', {
    email: userDetails.email,
    password: userDetails.password,
  });

const signUp = (userDetails: {
  email: string;
  password: string;
  username: string;
  phone: string;
}) =>
  apiClient.post<{email: string; username: string}>(
    RESOURCE_ROUTE + '/signup/',
    userDetails,
    {
      params: {account_type: 'customer'},
    },
  );

const getCurrentUser = () => apiClient.get(RESOURCE_ROUTE + '/me');

const getUserLocationDetails = (location: {
  latitude: number;
  longitude: number;
}) =>
  apiClient.get(RESOURCE_ROUTE + '/location', {
    lat: location.latitude,
    lng: location.longitude,
  });

export default {
  getCurrentUser,
  getUserLocationDetails,
  signIn,
  signUp,
};
