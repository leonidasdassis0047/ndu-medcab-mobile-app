import {apiClient} from '.';
import authStorage from '../utils/authStorage';

const RESOURCE_ROUTE = '/orders';

const getOrders = async () => {
  const user = await authStorage.getUser();
  if (!user) {
    return;
  }
  return apiClient.get(`${RESOURCE_ROUTE}/`, {
    user: user?.id,
  });
};

const getOrder = (orderId: string) =>
  apiClient.get(`${RESOURCE_ROUTE}/${orderId}`);

const placeOrder = (data: any) => {
  const order = {};
  return apiClient.post(`${RESOURCE_ROUTE}`, data, {params: {}});
};

export default {
  getOrder,
  getOrders,
  placeOrder,
};
