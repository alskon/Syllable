import React from 'react'
import './ClearButton.css'
import {connect} from 'react-redux'
import {refreshButtonTrigger} from '../../store/buttons/actions'
import {refreshSyllable} from '../../store/syllable/actions'
import {refreshNumbers} from '../../store/numbers/actions'
import {refreshMinMax} from '../../store/minmax/actions'
import {refreshWords} from '../../store/words/actions'
import {clearTimer} from '../../store/timer/actions'

const ClearButton = ({buttonTrigger, dispatch}) => {

    const onClickRefresh = ()=>{        
        dispatch(refreshButtonTrigger(''))
        dispatch(refreshSyllable())
        dispatch(refreshNumbers())
        dispatch(refreshMinMax())
        dispatch(refreshWords())
        dispatch(clearTimer())
    }
    return (
        <React.Fragment>
        <button className='refresh' style={{display: !buttonTrigger ? 'none' : ''}} onClick = {onClickRefresh}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" 
                viewBox="0 0 414 512">
                <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"/>
            </svg>

        </button>      
        </React.Fragment>
    )

}
const putStateToProps = state => {
    return (
        {
            buttonTrigger: state.activeButton.buttonTrigger
        }
    )
}
export default connect(putStateToProps)(ClearButton)