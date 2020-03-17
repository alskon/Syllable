import {combineReducers} from 'redux'
import {buttonReducer} from './buttons/reducers'
import {syllableReducer} from './syllable/reducers'
import {numberReducer} from './numbers/reducers'
import {minMaxReducer} from './minmax/reducers'
import {simpleWordsReducer} from './words/reducers'
import {timerReducer} from './timer/reducers'


export const allReducers = combineReducers({
    simpleWords: simpleWordsReducer,
    activeButton: buttonReducer,
    syllable : syllableReducer,
    numbers : numberReducer,
    minMax : minMaxReducer,
    timerReducer
})