export const CREATE_EQUATION = 'CREATE_EQUATION'
export const CREATE_RESULT_EQUATION = 'CREATE_RESULT_EQUATION'
export const SHOW_HIDE_RESULT_TRIGGER = 'SHOW_HIDE_RESULT_TRIGGER'
export const REFRESH_NUMBERS = 'REFRESH_NUMBERS'

export const setEquation = (equation, result)=>{
    return {
        type: CREATE_EQUATION,
        payload: {equation, result}
    }
}
export const setShowHideResult = (trigger)=>{
    return {
        type: SHOW_HIDE_RESULT_TRIGGER,
        payload: trigger
    }
}
export const refreshNumbers = ()=>{
    return {
        type: REFRESH_NUMBERS
    }
}