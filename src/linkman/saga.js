import { put, takeEvery } from 'redux-saga/effects'

import { tools } from '../global'
import * as  actionType from './actionType'
import { query } from './action'

function* handle(action) {
    yield put(query({}));
}


/**
 * 监听所有向后台请求数据的Action
 * 匹配结尾为 /Add,/Del,/Query,/Alter,/FuzzyQuery,/Read 的 Action
 */
function* watchSaga() {
    yield takeEvery((action) => {
        if (tools.Success(actionType.add) === action.type
            || tools.Success(actionType.alter) === action.type
            || tools.Success(actionType.del) === action.type) return true;
        return false;
    }, handle);
}


export default watchSaga