export const CREATE_EASY_SYLLABLE = 'CREATE_EASY_SYLLABLE' 
export const CREATE_HARD_SYLLABLE = 'CREATE_HARD_SYLLABLE' 
export const CREATE_EXTRA_SYLLABLE = 'CREATE_EXTRA_SYLLABLE' 
export const REFRESH_SYLLABLE = 'REFRESH_SYLLABLE' 


export const setEasySyllable = (syllable, style) => {
    return ({
        type: CREATE_EASY_SYLLABLE,
        payload: {syllable, style}
    })
}
export const setHardSyllable = (syllable, style) => {
    return ({
        type: CREATE_HARD_SYLLABLE,
        payload: {syllable, style}
    })
}
export const setExtraSyllable = (syllable, style) => {
    return ({
        type: CREATE_EXTRA_SYLLABLE,
        payload: {syllable, style}
    })
}
export const refreshSyllable = () => {
    return ({
        type: REFRESH_SYLLABLE
    })
}