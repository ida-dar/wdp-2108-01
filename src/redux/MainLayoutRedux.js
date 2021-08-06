/* selectors */
export const getRWD = ({ layout }) => layout.rwd;

/* action name creator */
const reducerName = 'rwd';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_RWD = createActionName('CHANGE_RWD');

/* action creators */
export const changeRWD = payload => ({ payload, type: CHANGE_RWD });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_RWD: {
      return {
        ...statePart,
        rwd: action.payload,
      };
    }
    default:
      return statePart;
  }
}
