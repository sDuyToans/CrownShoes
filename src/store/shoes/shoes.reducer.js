import { SHOES_ACTION_TYPES }  from './shoes.type'
const defaultState = {
    shoesCategories: {},
    isLoading: false,
    error: null
}

export const shoesReducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_START: 
        return {
            ...state, 
            isLoading: true
        }
        case SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_SUCCESS: 
        return {
            ...state,
            shoesCategories: payload,
            isLoading: false
        }
        case SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_FAILED: 
        return {
            ...state,
            error: payload,
            isLoading: false
        }
        default: 
        return state;
    }
}