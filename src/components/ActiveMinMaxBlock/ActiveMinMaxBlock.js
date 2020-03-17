import React from 'react'
import './ActiveMinMaxBlock.css'
import {connect} from 'react-redux'
import MinMaxBlock from './MinMaxBlock/MinMaxBlock'
import {setArrayNum, setMaximum, setMinimum, showHideMaxValue, showHideMinValue, setStyleAnswerMin, setStyleAnswerMax} from '../../store/minmax/actions'

const ActiveMinMaxBlock = ({buttonTrigger, triggerClassNameMin, triggerClassNameMax, dispatch})=>{
    
    const createXDigitNumber = digit => Math.floor(Math.random() * digit)
    const createRandomArray = (amountElem, digitArrNumber) => {
        const arr = new Set ()
        while (arr.size !== amountElem) arr.add(createXDigitNumber(digitArrNumber))        
        return [...arr]
    }    
    const createResultArray = trigger => {
        return (
            trigger === 'easy' ? createRandomArray(5, 10) :
            trigger === 'hard' ? createRandomArray(4, 100) :
            trigger === 'extra' ? createRandomArray(6, 100) : ''
        )
    }
    const getResultArray = () => {
        return (
            buttonTrigger === 'easyMinMax' ? createResultArray('easy') :
            buttonTrigger === 'hardMinMax' ? createResultArray('hard') : 
            buttonTrigger === 'extraMinMax' ? createResultArray('extra') : ''
        )
    }
    const getMaximum = arr => Math.max.apply(null, arr)
    const getMinimum = arr => Math.min.apply(null, arr)
    
    const writeResultArray = () => {
        const arr = getResultArray()
        const max = getMaximum(arr)
        const min = getMinimum(arr)
        dispatch(setArrayNum(arr))
        dispatch(setMaximum(max))
        dispatch(setMinimum(min))
        dispatch(showHideMinValue(false))
        dispatch(showHideMaxValue(false))
        dispatch(setStyleAnswerMin(false))
        dispatch(setStyleAnswerMax(false))
    }
    const buttonTriggers = ['easyMinMax', 'hardMinMax', 'extraMinMax']
    return (

        <div className= 'ActiveMinMaxBlock' 
            style={{display:buttonTriggers.includes(buttonTrigger)?'block':''}}
            onClick={()=>writeResultArray()} >
            <MinMaxBlock/>
            {triggerClassNameMin&&!triggerClassNameMax ? <p className='message'>Найден минимум</p> : 
                !triggerClassNameMin&&triggerClassNameMax ? <p className='message'>Найден максимум</p> :
                triggerClassNameMin&&triggerClassNameMax ? <p className='message'>Найден минимум и максимум</p> : ''
            }
        </div>
    )
}

const putStateToProps = state => {
    return {
    buttonTrigger: state.activeButton.buttonTrigger,
    triggerShowMin: state.minMax.triggerShowMin,
    triggerShowMax: state.minMax.triggerShowMax,
    triggerClassNameMin: state.minMax.triggerClassNameMin,
    triggerClassNameMax: state.minMax.triggerClassNameMax
    }
}
export default connect(putStateToProps)(ActiveMinMaxBlock)