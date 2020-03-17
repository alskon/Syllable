import React from 'react'
import './MinMaxBlock.css'
import ArrayNumber from './ArrayNumber/ArrayNumber'
import {connect} from 'react-redux'
import {showHideMinValue, showHideMaxValue} from '../../../store/minmax/actions'

const MinMaxBlock = ({arrayNumbers, minValue, maxValue, triggerShowMin, triggerShowMax, dispatch})=> {
        
    const showMinValue = e => {
        e.stopPropagation()
        dispatch (showHideMinValue(!triggerShowMin))
    }
    const showMaxValue = e => {
        e.stopPropagation()
        dispatch (showHideMaxValue(!triggerShowMax))
    }
 
    const outputArray = arrayNumbers.map((element, index)=> <ArrayNumber key={index} arrayElement={element}></ArrayNumber>)
    return (
        <React.Fragment>
            <div className='arrayBlock'>
                {outputArray}
            </div>
            <div className='minMaxWrapper'>
                <div className='minBlock' 
                    style={{display: minValue !=='Min' ? 'block' : ''}}
                    onClick={e => showMinValue(e)}>
                    {triggerShowMin ? minValue : 'Min'}
                </div>
                <div className='maxBlock' 
                    style={{display: maxValue !=='Max' ? 'block' : ''}}
                    onClick={e => showMaxValue(e)}>
                    {triggerShowMax ? maxValue : 'Max'}
                </div>
            </div>

        </React.Fragment>
    )
}

const putStateToProps = state => {
    return {
        arrayNumbers: state.minMax.arrayNumbers,
        minValue: state.minMax.min,
        maxValue: state.minMax.max,
        triggerShowMin: state.minMax.triggerShowMin,
        triggerShowMax: state.minMax.triggerShowMax
    }
}
export default connect(putStateToProps)(MinMaxBlock)
