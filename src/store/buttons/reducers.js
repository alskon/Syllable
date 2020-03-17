import {SET_BUTTON_TRIGGER, REFRESH_BUTTON_TRIGGER} from './actions'

const initialState = {
    buttonTrigger: '',
    buttonDisabled: false
}

export const buttonReducer = (state=initialState, action)=> {
    switch (action.type) {
        case SET_BUTTON_TRIGGER: 
            return {...state, buttonTrigger: action.payloads, buttonDisabled: true}
        case REFRESH_BUTTON_TRIGGER:
            return {...initialState}
        default: return state
    }
    
}

