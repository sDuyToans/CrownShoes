import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { shoesReducer } from './shoes/shoes.reducer';
import { userReducer } from './user/user.reducer';
export const rootReducer = combineReducers({
    userReducer: userReducer,
    shoesReducer: shoesReducer,
    cartReducer: cartReducer
})