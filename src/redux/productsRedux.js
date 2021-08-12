/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompare = ({ products }) =>
  products.filter(product => product.toCompare === true);

/* ACTIONS */

// action name creator
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_RATING = createActionName('ADD_RATING');
export const CHANGE_COMPARISON = createActionName('CHANGE_COMPARISON');
export const REMOVE_COMPARISON = createActionName('REMOVE_COMPARISON');

// action creators
export const addRating = payload => ({ payload, type: ADD_RATING });
export const changeComparison = payload => ({ payload, type: CHANGE_COMPARISON });
export const removeComparison = payload => ({ payload, type: REMOVE_COMPARISON });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_RATING: {
      return statePart.map(currentRating => {
        if (currentRating.id !== action.payload.id) {
          return currentRating;
        } else {
          localStorage.setItem(currentRating.id, action.payload.userRating);
          return {
            ...currentRating,
            userRating: action.payload.userRating,
          };
        }
      });
    }
    case CHANGE_COMPARISON: {
      let count = 0;
      for (let product of statePart) {
        if (product.toCompare === true) {
          count++;
        }
      }

      return statePart.map(product => {
        if (product.id === action.payload.id) {
          if (product.toCompare) {
            product.toCompare = false;
          } else if (count < 4) {
            product.toCompare = true;
          }
        }
        return product;
      });
    }
    case REMOVE_COMPARISON: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.toCompare = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}
