import { takeEvery } from 'redux-saga/effects'

import { tools } from '../global'
import * as  actionType from './actionType'

function* handle(action) {
    let { values = {} } = action;
    let { args = {} } = values;
    let { history } = args;
    history.push('/payment');
}


/**
 * 监听所有向后台请求数据的Action
 * 匹配结尾为 /Add,/Del,/Query,/Alter,/FuzzyQuery,/Read 的 Action
 */
function* watchSaga() {
    yield takeEvery((action) => {
        if (tools.Success(actionType.preOrderWs) === action.type) return true;
        return false;
    }, handle);
}


export default watchSaga