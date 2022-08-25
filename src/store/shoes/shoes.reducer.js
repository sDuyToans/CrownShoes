
const defaultState = {
    shoesCategories: {}
}

export const shoesReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type){
        case 'FECTH_CATEGORY': 
        const { shoesCategory } = payload;
        state.shoesCategories = shoesCategory;
        return {...state}
        default: 
        return state;
    }
}