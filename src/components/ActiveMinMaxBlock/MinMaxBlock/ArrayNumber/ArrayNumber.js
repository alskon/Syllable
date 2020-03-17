import React from 'react'
import './ArrayNumber.css'
import {connect} from 'react-redux'
import {setStyleAnswerMin, setStyleAnswerMax, showHideMinValue, showHideMaxValue} from '../../../../store/minmax/actions' 

const ArrayNumber = ({minValue, maxValue, styleClassNameMin, styleClassNameMax, dispatch, arrayElement}) => {
        
    const choiceElement = (e, element) => {
        e.stopPropagation()
        return element === minValue ? 
        (dispatch(setStyleAnswerMin(true)), dispatch(showHideMinValue(true))) : 
        element === maxValue ? 
        (dispatch(setStyleAnswerMax(true)), dispatch (showHideMaxValue(true))) : ''  
    }    
    return ( 
        <React.Fragment>
            <p className={
                arrayElement === minValue && styleClassNameMin ? 'correctMinAnswer' : 
                arrayElement === maxValue && styleClassNameMax ? 'correctMaxAnswer' : 
                 ''
               } 
                onClick={arrayElement !== 'Start!!!' ? e => choiceElement(e, arrayElement) : () => false}>
                {arrayElement}
            </p>
        </React.Fragment>
    )
}

const putStateToProps = state => {
    return {
        minValue: state.minMax.min,
        maxValue: state.minMax.max,
        triggerShowMin: state.minMax.triggerShowMin,
        triggerShowMax: state.minMax.triggerShowMax,
        styleClassNameMin: state.minMax.triggerClassNameMin,
        styleClassNameMax: state.minMax.triggerClassNameMax,
    }
}
export default connect (putStateToProps)(ArrayNumber)
