import { ADD_EVENT, DELETE_EVENT } from '../../action';
// const EDIT_EVENT = 'EDIT_EVENT';

const AmountStateReducer = (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case DELETE_EVENT:
      return {
        ...state,
        transactions: [
          ...state.transactions.filter((item) => item.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default AmountStateReducer;
