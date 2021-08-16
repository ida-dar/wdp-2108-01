/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getProductForPrice = ({ products }, min, max) =>
  products.filter(product => product.price <= max && product.price >= min);
export const getOnSale = ({ products }) =>
  products.filter(product => product.promo === 'sale');
export const getMinRate = ({ products }, minRate) =>
  products.filter(product => product.stars >= minRate);


export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* ACTIONS */

// action name creator
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_RATING = createActionName('ADD_RATING');
export const CHANGE_FAVOURITE = createActionName('CHANGE_FAVOURITE');

// action creators
export const addRating = payload => ({ payload, type: ADD_RATING });
export const changeFavourite = payload => ({ payload, type: CHANGE_FAVOURITE });

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

    case CHANGE_FAVOURITE: {
      const id = action.payload;
      return statePart.map(product => {
        if (id == product.id) {
          return {
            ...product,
            favourite: !product.favourite,
          };
        }

        return product;
      });
    }

    default:
      return statePart;
  }
}
