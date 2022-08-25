import { combineReducers } from 'redux';
import { shoesReducer } from './shoes/shoes.reducer';
import { userReducer } from './user/user.reducer';
export const rootReducer = combineReducers({
    userReducer: userReducer,
    shoesReducer: shoesReducer
})