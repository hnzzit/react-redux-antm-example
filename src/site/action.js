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
    url: '/WxZd/FindByZdmc',
    name: '查询',
    success_toast: false
})