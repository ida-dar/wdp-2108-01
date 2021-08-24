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
const QUANTITY_UP = createActionName('QUANTITY_UP');
const QUANTITY_DOWN = createActionName('QUANTITY_DOWN');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const quantityUp = payload => ({ payload, type: QUANTITY_UP });
export const quantityDown = payload => ({ payload, type: QUANTITY_DOWN });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProduct = action.payload;
      newProduct.qty =
        statePart.products.filter(product => product.id == newProduct.id).length + 1;
      return {
        ...statePart,
        products: [
          ...statePart.products.filter(product => product.id != newProduct.id),
          newProduct,
        ],
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
    case QUANTITY_UP: {
      console.log('Quantity_up');
      const product = action.payload;
      const productIdx = statePart.products.indexOf(product);
      const productsFront = statePart.products.slice(0, productIdx);
      const productsBack = statePart.products.slice(
        productIdx + 1,
        statePart.products.lenght
      );
      return {
        ...statePart,
        products: [
          ...productsFront,
          {
            ...product,
            qty: product.qty < 10 ? product.qty + 1 : product.qty,
          },
          ...productsBack,
        ],
      };
    }
    case QUANTITY_DOWN: {
      console.log('Quantity_down');
      const product = action.payload;
      const productIdx = statePart.products.indexOf(product);
      const productsFront = statePart.products.slice(0, productIdx);
      const productsBack = statePart.products.slice(
        productIdx + 1,
        statePart.products.lenght
      );
      return {
        ...statePart,
        products: [
          ...productsFront,
          {
            ...product,
            qty: product.qty > 1 ? product.qty - 1 : product.qty,
          },
          ...productsBack,
        ],
      };
    }
    default:
      return statePart;
  }
}
