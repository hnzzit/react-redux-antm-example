import { call, put, takeEvery } from 'redux-saga/effects'
import { tools, API } from './global'
import { Toast } from 'antd-mobile'

import { saga as linkman } from './linkman'
import { saga as booking } from './booking'

function* fetchData(action) {

    let { type, url, values, name, success_toast = true } = action;

    try {
        //请求后台数据
        const data = yield call(API.fetch, url, values);
        let { dataOutBody, pageOutBody, status } = data;//得到 dataOutBody pageOutBody
        if (status === 1) {
            yield put({ type: tools.Success(type), values: { dataOutBody, pageOutBody, args: values } });
            if (name && success_toast) Toast.success(tools.SuccessToast(name), 2)
        } else {
            yield put({ type: tools.Failure(type), values: { dataOutBody, pageOutBody, args: values } });
            if (name) Toast.fail(tools.FailureToast(name), 2)
        }
    } catch (err) {
        yield put({ type: tools.Failure(type), values: { err, args: values } });
        if (name) Toast.fail(tools.FailureToast(name), 2)
    }
}


/**
 * 监听所有向后台请求数据的Action
 * 匹配结尾为 /Add,/Del,/Query,/Alter,/FuzzyQuery,/Read 的 Action
 */
function* watchFetchData() {
    yield takeEvery((action) => {
        if (action.url) return true;
        return false;
    }, fetchData);
}

let sagas = [watchFetchData(), linkman(), booking()]

export default function* rootSaga() {
    yield sagas
}
