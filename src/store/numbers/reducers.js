import {CREATE_EQUATION, SHOW_HIDE_RESULT_TRIGGER, REFRESH_NUMBERS} from './actions'

const initialState = {
    equation: 'Start!!!',
    resultEquation:'', 
    showResultTrigger:false
}

export const numberReducer = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_EQUATION: 
            return {...state, equation:action.payload.equation, resultEquation:action.payload.result}
        case SHOW_HIDE_RESULT_TRIGGER:
            return {...state, showResultTrigger:action.payload}
        case REFRESH_NUMBERS:
            return{...initialState}
        default:
            return state
    }
}