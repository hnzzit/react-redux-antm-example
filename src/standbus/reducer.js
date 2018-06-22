import * as actionType from './actionType'

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.setArgs: {
            let { values = {} } = action;
            return Object.assign({}, state, values);
        }

        default:
            return Object.assign({}, state);
    }
}


export default reducer;