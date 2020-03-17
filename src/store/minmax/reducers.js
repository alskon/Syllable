import {CREATE_ARRAY_NUMBERS, CREATE_MIN_VALUE, CREATE_MAX_VALUE, SHOW_HIDE_MIN_TRIGGER, 
    SHOW_HIDE_MAX_TRIGGER, REFRESH_MINMAX, CHANGE_ANSWER_STYLE_MIN, CHANGE_ANSWER_STYLE_MAX} from './actions'

const initialState = {
    arrayNumbers: ['Start!!!'],
    min: 'Min',
    max: 'Max',
    triggerShowMin: false,
    triggerShowMax: false,
    triggerClassNameMin: false,
    triggerClassNameMax: false,
    clickIndex: [],
    triggerClassNameWrong: false,
}

export const minMaxReducer = (state=initialState, action)=> {
    switch(action.type) {
        case CREATE_ARRAY_NUMBERS:
            return {...state, arrayNumbers:action.payload}
        case CREATE_MIN_VALUE: 
            return {...state, min:action.payload}
        case CREATE_MAX_VALUE:
            return {...state, max:action.payload}
        case SHOW_HIDE_MIN_TRIGGER:
            return {...state, triggerShowMin:action.payload}
        case SHOW_HIDE_MAX_TRIGGER:
            return {...state, triggerShowMax:action.payload}
        case CHANGE_ANSWER_STYLE_MIN:
            return {...state, triggerClassNameMin: action.payload}
        case CHANGE_ANSWER_STYLE_MAX:
            return {...state, triggerClassNameMax: action.payload}
        case REFRESH_MINMAX: 
            return {...initialState}
        default: return state
    }
}