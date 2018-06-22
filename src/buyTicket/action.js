import * as actionType from './actionType'


/**
 * 增加联系人
 * @param {*} values 
 */
export const setArgs = (values) => ({
    type: actionType.setArgs,
    values
})


/**
 * 查询联系人
 * @param {*} values 
 */
export const query = (values) => ({
    type: actionType.query,
    values,
    url: '/WxSell/getBusInfo',
    name: '查询班次',
    success_toast: false
})