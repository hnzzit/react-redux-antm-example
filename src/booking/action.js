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
export const preOrderWs = (values) => ({
    type: actionType.preOrderWs,
    values,
    url: '/WxSell/preOrderWs',
    name: '下单',
    success_toast: false
})