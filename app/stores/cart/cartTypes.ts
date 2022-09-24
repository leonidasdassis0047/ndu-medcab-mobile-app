export interface CartItem {
  id: string;
  name: string;
  image: string;
  count: number;
  price: number;
  store: string;
}

export interface CartState {
  error: string | null;
  items: Array<CartItem>;
  selectedStore: string | null;
}
