import { ADD_BALANCE } from '../../action';

const BalanceReducer = (state, action) => {
  switch (action.type) {
    case ADD_BALANCE:
      console.log('TotalBalanceReducer:', state.totalBalance);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default BalanceReducer;
