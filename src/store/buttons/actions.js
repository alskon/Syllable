export const SET_BUTTON_TRIGGER = 'SET_BUTTON_TRIGGER'
export const REFRESH_BUTTON_TRIGGER = 'REFRESH_BUTTON_TRIGGER'

export const setButtonTrigger = trigger => {
    return (
        {type: SET_BUTTON_TRIGGER,
        payloads: trigger
        }
    )
}
export const refreshButtonTrigger = ()=> {
    return (
        {type: REFRESH_BUTTON_TRIGGER,
        }
    )
}

