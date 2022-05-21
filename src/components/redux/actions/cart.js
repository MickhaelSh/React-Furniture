export const addProductToCart = (productObject) => ({
  type: 'ADD_PRODUCT_CART',
  payload: productObject,
});

export const deleteItem = (idOfProduct) => ({
  type: 'DELETE_PRODUCT',
  payload: idOfProduct,
});

export const minusCartItem = (id) => ({
  type: 'MINUS_CART_PRODUCT',
  payload: id,
});
export const setCurrency = (currency) => ({
  type: 'SET_CURRENCY',
  payload: currency,
});

export const setRate = (rate) => ({
  type: 'SET_RATE',
  payload: rate,
});

export const orderSucseed = () => ({
  type: 'ORDER_SUCSEED',
});
