export const Success = (actionType) => {
    return actionType + '_SUCCESS';
}
export const Failure = (actionType) => {
    return actionType + '_FAILURE';
}
export const SuccessToast = (name) => {
    return name + '成功';
}
export const FailureToast = (name) => {
    return name + '失败';
}

/**
 * 查看 Set 中是否存在 obj 
 * @param {*} set 
 * @param {*} obj 
 * @param {*} key 
 */
export const SetHas = (set, obj, key) => {
    let flag = false;
    set.forEach((s, index) => {
        if (s[key] === obj[key]) flag = true;
    })

    return flag;
}

/**
 * 删除 Set 中的 obj 对象
 * @param {*} set 
 * @param {*} obj 
 * @param {*} key 
 */
export const SetDel = (set, obj, key) => {
    set.forEach((s, index) => {
        if (s[key] === obj[key]) set.delete(s);
    })
}