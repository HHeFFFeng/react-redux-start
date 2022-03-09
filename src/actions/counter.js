import * as constants from "../constants"

export function increment(num) {
    // return {
    //     type: constants.INCREMENT,
    //     num: num
    // }

    // 延迟操作
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: constants.INCREMENT,
                num: num
            })
        }, 1000)
    }
}

export function decrement(num) {
    return {
        type: constants.DECREMENT,
        num: num
    }
}