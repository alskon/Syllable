import {CREATE_EASY_SYLLABLE, CREATE_HARD_SYLLABLE, CREATE_EXTRA_SYLLABLE, REFRESH_SYLLABLE} from './actions'

const initialState = {
    syllableParagraph: 'Start!!!',
    style: {width:'auto', height:'auto', left:'', top:''}
}

export const syllableReducer = (state = initialState, action)=> {
    switch (action.type) {
        case CREATE_EASY_SYLLABLE: 
        return {...state, syllableParagraph: action.payload.syllable, style: action.payload.style}
        case CREATE_HARD_SYLLABLE: 
        return {...state, syllableParagraph: action.payload.syllable, style: action.payload.style}
        case CREATE_EXTRA_SYLLABLE: 
        return {...state, syllableParagraph: action.payload.syllable, style: action.payload.style}
        case REFRESH_SYLLABLE: 
        return {...initialState}
        default: return state
    }

}