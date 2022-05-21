const initialState = {
  products: {},
  totalPrice: 0,
  totalCount: 0,
  currencyTag: '$',
  uahRate: 1,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      const currentProducts = !state.products[action.payload.id]
        ? [action.payload]
        : [...state.products[action.payload.id].products, action.payload];
      const newProducts = {
        ...state.products,
        [action.payload.id]: {
          products: currentProducts,
          totalPrice: getTotalPrice(currentProducts),
        },
      };
      const products = Object.values(newProducts).map((obj) => obj.products);
      const allProducts = [].concat.apply([], products);
      const allPrices = getTotalPrice(allProducts);
      return {
        ...state,
        products: newProducts,
        totalCount: allProducts.length,
        totalPrice: allPrices,
      };
    }
    case 'DELETE_PRODUCT': {
      const prevProducts = state.products;
      const priceAfterDelete = state.totalPrice - prevProducts[action.payload].totalPrice;
      const coutAfterDelete = state.totalCount - prevProducts[action.payload].products.length;
      delete prevProducts[action.payload];

      return {
        ...state,
        products: prevProducts,
        totalPrice: priceAfterDelete,
        totalCount: coutAfterDelete,
      };
    }
    case 'MINUS_CART_PRODUCT': {
      const productInCart = state.products[action.payload].products;
      if (productInCart.length > 1) productInCart.pop();
      const productsInCart = Object.values(state.products).map((obj) => obj.products);
      const allProducts = [].concat.apply([], productsInCart);
      const allPrices = getTotalPrice(allProducts);
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload]: {
            products: productInCart,
            totalPrice: getTotalPrice(productInCart),
          },
        },
        totalPrice: allPrices,
        totalCount: allProducts.length,
      };
    }
    case 'SET_CURRENCY': {
      return { ...state, currencyTag: action.payload };
    }
    case 'SET_RATE': {
      return { ...state, uahRate: action.payload };
    }
    case 'ORDER_SUCSEED':
      return { ...state, products: {}, totalPrice: 0, totalCount: 0 };

    default:
      return state;
  }
};

export default cart;
