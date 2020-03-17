import React from 'react'
import './Button.css'
import {connect} from 'react-redux'
import {setButtonTrigger} from '../../../../store/buttons/actions'
import {launchTimer} from '../../../../store/timer/actions'

const Button = ({button, buttonTrigger, disabled, dispatch})=> {

    const changeTriggers = () => {
        dispatch(setButtonTrigger(buttonTrigger))
        dispatch(launchTimer(true))
    }
    return(
        <React.Fragment>
            <button className='navButton' type='button' disabled = {disabled}
                onClick={changeTriggers}>
                {button}</button>
        </React.Fragment>
    )
}


export default connect()(Button)