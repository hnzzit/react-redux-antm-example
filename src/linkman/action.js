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
 * 增加联系人
 * @param {*} values 
 */
export const add = (values) => ({
    type: actionType.add,
    values,
    url: '/WxLxr/Add',
    name: '增加'
})


/**
 * 删除联系人
 * @param {*} values 
 */
export const del = (values) => ({
    type: actionType.del,
    values,
    url: '/WxLxr/DelLxr',
    name: '删除'
})



/**
 * 修改联系人
 * @param {*} values 
 */
export const alter = (values) => ({
    type: actionType.alter,
    values,
    url: '/WxLxr/update',
    name: '修改'
})


/**
 * 查询联系人
 * @param {*} values 
 */
export const query = (values) => ({
    type: actionType.query,
    values,
    url: '/WxLxr/TWxLxrFindAll',
    name: '查询',
    success_toast: false
})