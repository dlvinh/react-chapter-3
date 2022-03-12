import { BETTING_TYPE, ROLLING_TYPE } from "../types/typeList"

export const bettingAction = ({...agr})=>{
    return {
        type: BETTING_TYPE,
        other: {...agr},
    }
}

export const rollingDices = ()=>{
    return {
        type: ROLLING_TYPE
    }
}