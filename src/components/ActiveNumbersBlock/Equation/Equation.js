import React from 'react'
import './Equation.css'
import {connect} from 'react-redux'
import {setShowHideResult} from '../../../store/numbers/actions'

const Equation = ({equation, trigger, resultEquation, dispatch})=> {

    const showResult = e => {
        e.stopPropagation()
        dispatch(setShowHideResult(!trigger))        
    }  
    return (
        <div className='numberBlock'>
            <p>
                {equation}            
            </p>
            <div className='question' 
                style={{display: equation==='Start!!!' ? 'none' : ''}} 
                onClick={e => showResult(e)}>
                    {trigger ? resultEquation :'?'}
            </div>            
        </div>
    )
}

const putStateToProps = state => {
    return {
    equation: state.numbers.equation,
    resultEquation: state.numbers.resultEquation,
    trigger: state.numbers.showResultTrigger
    }
}
export default connect(putStateToProps)(Equation)

