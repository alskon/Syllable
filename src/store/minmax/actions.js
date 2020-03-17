export const CREATE_ARRAY_NUMBERS = 'CREATE_ARRAY_NUMBERS'
export const CREATE_MIN_VALUE = 'CREATE_MIN_VALUE'
export const CREATE_MAX_VALUE = 'CREATE_MAX_VALUE'
export const SHOW_HIDE_MIN_TRIGGER = 'SHOW_HIDE_MIN_TRIGGER'
export const SHOW_HIDE_MAX_TRIGGER = 'SHOW_HIDE_MAX_TRIGGER'
export const CHANGE_ANSWER_STYLE_MIN = 'CHANGE_ANSWER_STYLE_MIN'
export const CHANGE_ANSWER_STYLE_MAX = 'CHANGE_ANSWER_STYLE_MAX'
export const REFRESH_MINMAX = 'REFRESH_MINMAX'

export const setArrayNum = array => {
    return {
        type:CREATE_ARRAY_NUMBERS,
        payload: array
    }
}
export const setMinimum = min => {
    return {
        type:CREATE_MIN_VALUE,
        payload: min
    }
}
export const setMaximum = max => {
    return {
        type:CREATE_MAX_VALUE,
        payload: max
    }
}
export const showHideMinValue = trigger => {
    return {
        type:SHOW_HIDE_MIN_TRIGGER,
        payload: trigger
    }
}
export const showHideMaxValue = trigger => {
    return {
        type:SHOW_HIDE_MAX_TRIGGER,
        payload: trigger
    }
}
export const setStyleAnswerMin = trigger => {
    return {
        type:CHANGE_ANSWER_STYLE_MIN,
        payload: trigger
    }
}
export const setStyleAnswerMax = trigger => {
    return {
        type:CHANGE_ANSWER_STYLE_MAX,
        payload: trigger
    }
}
export const refreshMinMax = () => {
    return {
        type: REFRESH_MINMAX
    }
}