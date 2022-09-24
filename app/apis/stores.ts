import {IStore} from '../utils/types';
import {apiClient} from './';
const RESOURCE_ROUTE = '/stores';

/**
 * @description: get stores
 */
export const getStores = async (): Promise<Array<IStore> | void> => {
  try {
    const {data} = await apiClient.get(RESOURCE_ROUTE);
    if (data.error) {
      return;
    }

    return data.data;
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const fetchNearbyStores = async (): Promise<Array<IStore> | void> => {
  try {
    const {data} = await apiClient.get('/stores/nearby');
    console.log(data);
  } catch (error: any) {
    console.log(error?.message);
  }
};

/**
 * @description: get stores
 */
export const getStore = async (id: string): Promise<IStore | void> => {
  try {
    const {data} = await apiClient.get(`${RESOURCE_ROUTE}/${id}/`, {
      params: {
        with_inventory: true,
      },
    });
    if (data.error) {
      return;
    }

    return data.data;
  } catch (error: any) {
    console.log(error?.message);
  }
};
