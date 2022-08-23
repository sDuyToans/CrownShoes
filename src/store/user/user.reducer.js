
const stateDefault = {
    currentUser: false,
}

export const userReducer = (state = stateDefault, action) =>{
    const { type, payload } = action
    switch (type){
        case 'CURRENT_USER_ON': {
            state.currentUser = payload;
            return {...state};
        }
        case 'LOG_OUT': {
            state.currentUser = payload;
            return {...state};
        }
        default:
            return {...state};
    }
}