/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CART });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products.filter(product => product !== action.payload)],
      };
    }
    case CLEAR_CART: {
      return {
        ...statePart,
        products: [],
      };
    }
    default:
      return statePart;
  }
}
