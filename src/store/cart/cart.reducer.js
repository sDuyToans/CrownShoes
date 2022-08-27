const StateDefault = {
  isCartOpen: false,
  itemsCart: [],
};
const addItem = (cartItems, productToAdd) => {
  // kiểm tra xem item đã tồn tại trong cartItems chưa
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  // Nếu tìm thấy thì trả về quantity + 1;
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const removeItem = (cartItems, productToRemove) => {
  // kiểm tra xem item đã tồn tại trong cartItems chưa
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );
  //Nếu quantity = 1 thì xóa khỏi mảng
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== productToRemove.id)
  }

    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  
};

export const cartReducer = (state = StateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM_TO_CART":
      const { product } = payload;
      const newItemsCart = addItem(state.itemsCart, product);
      state.itemsCart = [...newItemsCart];
      return { ...state };
    case "CLEAR_ITEM_FROM_CART":
      const { item } = payload;
      const cartItemsAfterClear = clearCartItem(state.itemsCart, item);
      state.itemsCart = [...cartItemsAfterClear];
      return { ...state };
    case "DECREASE_QUANTITY":
        const { itemDecrease } = payload;
        const itemsCartAfterDecrease = removeItem(state.itemsCart, itemDecrease);
        state.itemsCart = [...itemsCartAfterDecrease];
        return {...state}
    case "INCREASE_QUANTITY":
      const { itemIncrease } = payload;
      const itemsCartAfterIncrease = addItem(state.itemsCart, itemIncrease);
      state.itemsCart = [...itemsCartAfterIncrease];
      return { ...state };
    case "OPEN_CART":
      state.isCartOpen = payload;
      return { ...state };
    default:
      return state;
  }
};
