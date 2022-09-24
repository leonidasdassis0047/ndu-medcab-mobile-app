export interface IStore {
  id: string;
  name: string;
  email: string;
  status: string;
  cover_image: string;
  description?: string;
  location: {
    coords: [number];
  };
  inventory: [IProduct];
}

export interface IProduct {
  id: string;
  name: string;
  tradename: string;
  actual_price: number;
  pricing: {
    price: number;
    currency: string;
  };
  description: string;
  image: string;
  images: Array<string>;
  categories: Array<string>;
  tags: Array<string>;
  store: string;
}

export interface IOrderItem {
  count: number;
  id: string;
  price: number;
  image: string;
}

export interface IOrder {
  items: Array<IOrderItem>;
}
