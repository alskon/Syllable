import React from 'react'
import './Main.css'
import {connect} from 'react-redux'
import ActiveSyllableBlock from '../../components/ActiveSyllableBlock/ActiveSyllableBlock'
import ActiveNumbersBlock from '../../components/ActiveNumbersBlock/ActiveNumbersBlock'
import ActiveMinMaxBlock from '../../components/ActiveMinMaxBlock/ActiveMinMaxBlock'
import ActiveWordsBlock from '../../components/ActiveWordsBlock/ActiveWordsBlock'
import Timer from '../../components/Timer/Timer'
import ClearButton from '../../components/ClearButton/ClearButton'

const Main = ()=> {
   
    return (
        <main>
            <div className='timerClearWrapper'>
                <Timer/>
                <ClearButton/>
            </div>                        
            <ActiveSyllableBlock/>
            <ActiveWordsBlock/>
            <ActiveNumbersBlock/>
            <ActiveMinMaxBlock/>

        </main>
    )
}

export default connect()(Main)

