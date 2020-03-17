import React from 'react'
import './ActiveSyllableBlock.css'
import Syllable from './Syllable/Syllable'
import {easyVowels, hardVowels, extraVowels, easyConsonants, hardConsonants, extraConsonants, 
    easyVowelsEng, hardVowelsEng, easyConsonantsEng, hardConsonantsEng, extraConsonantsEng} from '../../dataconsts'
import {connect} from 'react-redux'
import {setEasySyllable, setHardSyllable, setExtraSyllable} from '../../store/syllable/actions'

const ActiveSyllableBlock = ({buttonTrigger, dispatch})=>{

    const createRandomPosition = ()=> {
        return {
            left:`${Math.floor(Math.random() * (820) - 410)}px`,
            top:`${Math.floor(Math.random()*300)}px` 
        }
    }
    const createSyllable = (vowel, consonant) =>{
       return (Math.round(Math.random())===0) ? 
       (vowel[Math.floor(Math.random()*vowel.length)] + consonant[Math.floor(Math.random()*consonant.length)]).toUpperCase() : 
       (consonant[Math.floor(Math.random()*consonant.length)] + vowel[Math.floor(Math.random()*vowel.length)]).toUpperCase()
    }
    const createUnexceptSyllable = (vowel, consonant)=>{   
        const syllable = createSyllable (vowel, consonant)     
        return syllable === 'ЖЫ' ? 'ЖИ' : 
            syllable === 'ШЫ' ?  'ШИ' : 
            syllable === 'ЩЫ' ?  'ЩИ' : 
            syllable === 'ЧЫ' ? 'ЧИ' : 
            syllable            
    }
    const writeSyllable = ()=>{
       return (buttonTrigger ==='easy' ? dispatch(setEasySyllable(createUnexceptSyllable(easyVowels, easyConsonants), createRandomPosition())) : 
        buttonTrigger ==='hard' ? dispatch(setHardSyllable(createUnexceptSyllable(hardVowels, hardConsonants), createRandomPosition())) :
        buttonTrigger ==='extra' ? dispatch(setExtraSyllable(createUnexceptSyllable(extraVowels, extraConsonants), createRandomPosition())) : 
        buttonTrigger ==='easyEng' ? dispatch(setEasySyllable(createUnexceptSyllable(easyVowelsEng, easyConsonantsEng), createRandomPosition())) :
        buttonTrigger ==='hardEng' ? dispatch(setEasySyllable(createSyllable(hardVowelsEng, hardConsonantsEng), createRandomPosition())) :
        buttonTrigger ==='extraEng' ? dispatch(setEasySyllable(createSyllable(hardVowelsEng, extraConsonantsEng), createRandomPosition())) :
        '')
    }
    const buttonSyllableTriggers = ['easy', 'hard', 'extra', 'easyEng', 'hardEng', 'extraEng']
    return (
            <div className='activeSyllableBlock' onClick={()=>writeSyllable()} 
                style={{display:buttonSyllableTriggers.includes(buttonTrigger) ? 'block' : ''}}>
                <Syllable/>
            </div>        
    )
}
const putStateToProps = state => {
    return({
        buttonTrigger:state.activeButton.buttonTrigger
    })
}
export default connect(putStateToProps)(ActiveSyllableBlock)