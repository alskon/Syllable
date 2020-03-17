import React from 'react'
import './Navigation.css'
import Form from './Form/Form'
import {syllableRusButton, syllableEngButton, numbersButton, minMaxButton, wordsRusButton, wordsEngButton} from '../../dataconsts'


export const Navigation =()=>{

    return (
        <div className='Navigation'>                        
            <Form buttonArrayRus={syllableRusButton}
                buttonArrayEng={syllableEngButton}
                buttonArrayNumbers={numbersButton}
                buttonArrayMinMax={minMaxButton}
                buttonArrayWordsRus= {wordsRusButton}
                buttonArrayWordsEng={wordsEngButton}
            />                       
        </div>
    )
}

