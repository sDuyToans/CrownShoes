import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPE } from './cart.type';

export const addItem = (cartItems, productToAdd) => {
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

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };
  
export const removeItem = (cartItems, productToRemove) => {
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

export const addItemToCarts = (cartItems, itemsToAdd) => {
    const newCartItems = addItem(cartItems, itemsToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const decreaseItemQuantity = (cartItems, itemsToAdd) => {
    const newCartItems = removeItem(cartItems, itemsToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = boolean => 
 createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean)
