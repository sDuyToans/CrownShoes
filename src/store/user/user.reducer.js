import { USER_ACTION_TYPES } from "./user.type"

const stateDefault = {
    currentUser: null,
}

export const userReducer = (state = stateDefault, action) =>{
    const { type, payload } = action
    switch (type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:    
            return {
                ...state, currentUser: payload
            }
        default:
            return state;
    }
}