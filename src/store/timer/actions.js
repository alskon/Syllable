export const CHANGE_TIMER_TRIGGER = 'CHANGE_TIMER_TRIGGER'
export const CLEAR_TIMER = 'CLEAR_TIMER'
export const CHANGE_SECOND = 'CHANGE_SECOND'
export const CHANGE_MINUTE = 'CHANGE_MINUTE'
export const CHANGE_HOUR = 'CHANGE_HOUR'

export const launchTimer = trigger => {
    return (
        {
            type: CHANGE_TIMER_TRIGGER,
            payload: trigger
        }
    )
}
export const changeSeconds = second => {
    return (
        {
            type: CHANGE_SECOND,
            payload: second
        }
    )
}
export const changeMinutes = minute => {
    return (
        {
            type: CHANGE_MINUTE,
            payload: minute
        }
    )
}
export const changeHours = hour => {
    return (
        {
            type: CHANGE_HOUR,
            payload: hour
        }
    )
}
export const clearTimer = () => {
    return (
        {
            type: CLEAR_TIMER
        }
    )
}