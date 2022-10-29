const BalanceReducer = (state, action) => {
  const ADD_BALANCE = 'ADD_BALANCE';

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
