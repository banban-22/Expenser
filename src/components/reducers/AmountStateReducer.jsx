const AmountStateReducer = (state, action) => {
  const CREATE_EVENT = 'CREATE_EVENT';
  const DELETE_EVENT = 'DELETE_EVENT';
  // const EDIT_EVENT = 'EDIT_EVENT';

  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
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

  // switch (action.type) {
  //   case CREATE_EVENT:
  //     const event = {
  //       title: action.title,
  //       amount: action.amount,
  //       date: action.date,
  //       total: 0,
  //     };
  //     const length = state.length;
  //     const id = length === 0 ? 1 : state[length - 1].id + 1;
  //     return [...state, { id, ...event }];

  //   case DELETE_EVENT:
  //     return state.filter((event) => event.id !== action.id);

  //   default:
  //     return state;
  // }
};

export default AmountStateReducer;
