import { SHOES_ACTION_TYPES }  from './shoes.type'
const defaultState = {
    shoesCategories: {}
}

export const shoesReducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case SHOES_ACTION_TYPES.SET_SHOES_CATEGORIES: 
        return {
            ...state,
            shoesCategories: payload
        }
        default: 
        return state;
    }
}