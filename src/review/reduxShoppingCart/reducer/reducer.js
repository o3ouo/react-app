const initialState = {
  cart: [],
};

function reducer(state = initialState, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart.find(tem => tem.id === action.payload.id);
      if (item) {
        return {
          ...state,
          cart: state.cart.map(tem =>
            tem.id === action.payload.id ? { ...tem, count: tem.count + 1 } : tem
          )
        };
      }
      return {
        ...state, cart: [...state.cart, { ...action.payload, count: 1 }]
      }

    case "PLUS_COUNT":
      return {
        ...state, cart: state.cart.map(tem =>
          tem.id === action.payload.id ? { ...tem, count: tem.count + 1 } : tem
        )
      };

    case "MINUS_COUNT": 
      return {
        ...state,
        cart: state.cart.map(tem => 
          tem.id === action.payloade.id && tem.count > 1
            ? { ...tem, count: tem.count - 1 }
            : tem
        )
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(tem => tem.id !== action.payload.id)
      };

    default:
      return { ...state };
  }
}

export default reducer;