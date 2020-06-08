export const MOVE_UNIT = 'MathEffect/MOVE_UNIT';

const initialState = {
    units: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_UNIT:
            return Object.assign({}, state, {created:true, id: action.data});
        default: break;
    }
    return state;
};

// export const reducer = combineReducers({
//     data: dataReducer,
//     sellRequest: sellRequest
// });
