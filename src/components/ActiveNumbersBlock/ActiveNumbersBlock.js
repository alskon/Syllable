import React from 'react'
import './ActiveNumbersBlock.css'
import Equation from './Equation/Equation'
import {connect} from 'react-redux'
import {setEquation, setShowHideResult} from '../../store/numbers/actions'

const ActiveNumbersBlock = ({buttonTrigger, dispatch})=> {

    const createXDigitNumber = digit => Math.floor(Math.random()*digit)

    const createEquation = trigger => {
        const x = trigger === 'easy' ? createXDigitNumber(10) : (trigger === 'hard' || trigger === 'extra') ? createXDigitNumber(100) : ''
        const y = (trigger === 'easy'|| trigger === 'hard') ? createXDigitNumber(10): trigger === 'extra' ? createXDigitNumber(100) : ''
        return (
            (x >= y) ? (Math.random()>0.5 ? {equation: `${x} + ${y} = `, result:x+y} : {equation : `${x} - ${y} = `, result:x-y}) :
            (x < y)  ? (Math.random()>0.5 ? {equation :`${y} - ${x} = `, result:y-x} : {equation: `${x} + ${y} = `, result:x+y}) : '' 
        )
    }
    const getEquation = () => { 
        return buttonTrigger === 'easyEquation' ? createEquation('easy') :
        buttonTrigger === 'hardEquation' ? createEquation('hard') :
        buttonTrigger === 'extraEquation' ? createEquation('extra') : ''
    }
    const writeEquation = ()=>{
        const {equation, result} = getEquation()
        dispatch(setEquation(equation, result))
        dispatch(setShowHideResult(false))  
    }
    const buttonTriggers = ['easyEquation', 'hardEquation', 'extraEquation']
    return (
        <div className='ActiveNumbersBlock' onClick={()=>writeEquation()}
                style={{display:buttonTriggers.includes(buttonTrigger) ? 'block' : ''}}> 
            <Equation/>
        </div>
    )
}

const putStateToProps = state =>{
    return {
        showTrigger: state.numbers.showResultTrigger,
        buttonTrigger : state.activeButton.buttonTrigger
    }
}
export default connect(putStateToProps)(ActiveNumbersBlock)

