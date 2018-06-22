import * as actionType from './actionType'
import { tools } from '../global'

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.setArgs: {
            let { values = {} } = action;
            return Object.assign({}, state, values);
        }

        case tools.Success(actionType.query): {
            let { values = {} } = action;
            let { dataOutBody = [] } = values;
            return Object.assign({}, state, { datasouce: dataOutBody });
        }
        default:
            return Object.assign({}, state);
    }
}


export default reducer;