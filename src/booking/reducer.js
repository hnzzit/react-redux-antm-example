
import { tools } from '../global'

import * as actionType from './actionType'


const reducer = (state, action) => {
    switch (action.type) {
        case actionType.setArgs: {
            let { values = {} } = action;
            return Object.assign({}, state, values);
        }
        case tools.Success(actionType.preOrderWs): {
            let { values = {} } = action;
            return Object.assign({}, state, { datasource: values.dataOutBody, args: values.args });
        }
        default:
            return Object.assign({}, state);
    }
}


export default reducer;