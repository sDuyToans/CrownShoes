import { CART_ACTION_TYPE } from "./cart.type";

const StateDefault = {
  isCartOpen: false,
  itemsCart: [],
};
export const cartReducer = (state = StateDefault, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return { 
        ...state , 
        itemsCart: payload
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return { 
        ...state,
        isCartOpen: payload
      };
    default:
      return state;
  }
};
