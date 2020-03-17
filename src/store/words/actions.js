export const GET_ARRAY_WORDS = 'GET_ARRAY_WORDS'
export const CREATE_WORD = 'CREATE_WORD'
export const REFRESH_WORDS = 'REFRESH_WORDS'

export const fillArrayWords = arr => {
    return ({
        type: GET_ARRAY_WORDS,
        payload: arr
    })
}
export const setWord = (word, style) => {
    return ({
        type: CREATE_WORD,
        payload: {word, style}
    })
}
export const refreshWords = () => {
    return ({
        type: REFRESH_WORDS
    })
}
