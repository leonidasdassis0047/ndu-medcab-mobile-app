/**
 * @desc        calculating the total price in cart
 * @param       items{Array<{count: number; price: number}>} cart items array
 * @returns     total price for all items
 */
export const calculateTotal = (
  items: Array<{count: number; price: number}>,
): number => {
  if (items.length === 0) {
    return 0;
  }
  return items.reduce((prev, current) => {
    return prev + current.count * current.price;
  }, 0);
};

/**
 * @desc      calculates the total number of items in the cart
 * @param     items{Array<{count: number; price: number}>} cart items array
 * @returns   total number of items
 */
export const cartTotalItems = (
  items: Array<{count: number; price: number}>,
): number => {
  if (items.length === 0) {
    return 0;
  }
  return items
    .map(item => item.count)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

/**
 * @desc        calculate the total for only this item
 * @param       items{Array<{count: number; id: string; price: number}>} cart items array
 * @param       id id whose item's total price id calculated
 * @returns     total for this item
 */
export const calculateTotalForOne = (
  items: Array<{count: number; id: string; price: number}>,
  id: string,
): number => {
  const cartItem = items.find(item => item.id === id);
  if (!cartItem) {
    return 0;
  }
  return cartItem?.count * cartItem?.price;
};
