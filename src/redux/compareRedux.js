/* selectors */
export const getAll = ({ compare }) => compare.products;
export const getCount = ({ compare }) => compare.products.length;

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_COMPARE = createActionName('ADD_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_COMPARE });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COMPARE:
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };

    case REMOVE_COMPARE:
      return {
        ...statePart,
        products: [...statePart.products.filter(product => product !== action.payload)],
      };

    default:
      return statePart;
  }
}
