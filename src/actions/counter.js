import * as constants from "../constants"

export function increment(num){
    return {
        type: constants.INCREMENT,
        num: num
    }
}

export function decrement(num){
    return{
        type: constants.DECREMENT,
        num: num
    }
}