import {apiClient} from './';

const RESOURCE_ROUTE = '/stores';

export const getStores = () => apiClient.get(RESOURCE_ROUTE);

export const fetchNearbyStores = (params: {
  distance: number;
  lat: number;
  lng: number;
}) =>
  apiClient.get(RESOURCE_ROUTE + '/nearby/', {
    distance: params.distance,
    lat: params.lat,
    lng: params.lng,
  });

export const fetchRecommendedStores = () =>
  apiClient.get(RESOURCE_ROUTE + '/recommended');

export const getStore = (id: string) => {
  return apiClient.get(`${RESOURCE_ROUTE}/${id}/`, {
    with_inventory: true,
  });
};

export default {
  getStore,
  getStores,
  fetchNearbyStores,
  fetchRecommendedStores,
};
