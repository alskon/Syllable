import {GET_ARRAY_WORDS, CREATE_WORD, REFRESH_WORDS} from './actions'

const initialState = {
    wordParagraph: 'Start!!!',
    style: {width:'auto', height:'auto', left:'', top:''},
    arrayWords:[]
}

export const simpleWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARRAY_WORDS:
            return {...state, arrayWords: action.payload}
        case CREATE_WORD:
            return {...state, wordParagraph: action.payload.word, style: action.payload.style}
        case REFRESH_WORDS:
            return {...state, wordParagraph: 'Start!!!', style: {width:'auto', height:'auto', left:'', top:''}}
        default: 
            return state
    }
}
