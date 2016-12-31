import * as types from '../actionTypes/auth';

const authInitialState = {
    isLoggedIn : false,
    personalWelcomeMsg:''
};

const authReducer = (state = authInitialState, action) => {
    switch(action.type) {
        case types.LOG_IN :
            return {
                ...state,
                isLoggedIn: true,
                personalWelcomeMsg: action.payload
            };
        case types.LOG_OUT :
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}

export default authReducer;