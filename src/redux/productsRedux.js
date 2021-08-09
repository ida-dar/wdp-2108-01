/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* ACTIONS */

// action name creator
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_RATING = createActionName('ADD_RATING');

// action creators
export const addRating = payload => ({ payload, type: ADD_RATING });

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
    default:
      return statePart;
  }
}
