import {CHANGE_TIMER_TRIGGER, CLEAR_TIMER, CHANGE_SECOND, CHANGE_MINUTE, CHANGE_HOUR} from './actions'

const initialState = {
    hours:0,
    minutes:0,
    seconds:0,
    triggerTimer: false
}

export const timerReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_TIMER_TRIGGER:
            return {...state, triggerTimer:action.payload}
        case CHANGE_SECOND:
            return {...state, seconds:action.payload}
        case CHANGE_MINUTE:
            return {...state, minutes:action.payload}
        case CHANGE_HOUR:
            return {...state, hours:action.payload}
        case CLEAR_TIMER: 
            return {...initialState}
        default: return state
    }
}