import * as types from '../actionTypes/user';

const userInitialState = {
    data: [
        { id:1, name:'Donald Trump' },
        { id:2, name:'Obama' },
        { id:3, name:'George Bush' },
        { id:4, name:'Bill Clinton' }
    ]
};

const userReducer = (state = userInitialState, action) => {
    switch(action.type) {
        case types.DELETE_USER:
            return {
                ...state,
                data : state.data.filter( (user) => user.id != action.payload )
            };
        default:
            return state;
    }
}

export default userReducer;
