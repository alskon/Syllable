import React from 'react'
import './ActiveWordsBlock.css'
import Words from './Words/Words'
import {connect} from 'react-redux'
import {setWord} from '../../store/words/actions'


const ActiveWordsBlock = ({buttonTrigger, arrayWords, dispatch}) => {

    const threeLetterWords = arrayWords.filter(array => array.id === 'ThreeLetterWords')[0]
    const fourLetterWords = arrayWords.filter(array => array.id === 'FourLetterWords')[0]   
    const sixLetterWords = arrayWords.filter(array => array.id === 'SixLetterWords')[0]
    const threeLetterWordsEng = arrayWords.filter(array => array.id === 'ThreeLetterWordsEng')[0]
    const fourLetterWordsEng = arrayWords.filter(array => array.id === 'FourLetterWordsEng')[0]
    const sixLetterWordsEng = arrayWords.filter(array => array.id === 'SixLetterWordsEng')[0]
    const createRandomPosition = ()=> {
        return {
            left:`${Math.floor(Math.random() * (300) - 150)}px`,
            top:`${Math.floor(Math.random() * (335) -10)}px` 
        }
    }
    const choiceRandomWord = arr =>{ 
        const checkConnection = () => {
            try {
                return [...new Set(arr.words)]
            } catch (e) {
                console.log(e)
                return ['DB error']
            }
        }
        const uniqArray = checkConnection()      
        return uniqArray[Math.floor(Math.random()*uniqArray.length)].toUpperCase()
    }
    const choiceRandomWordFromAllWords = (...arr) => {
        const checkConnection = () => {
            try {
                return [...arr].map(item => item.words).flat()
            } catch (e) {
                console.log(e)
                return ['DB error']                
            }
        }
        const combineArr = checkConnection()
        const uniqArray = [...new Set(combineArr)]        
        return uniqArray[Math.floor(Math.random()*uniqArray.length)].toUpperCase()
    }
    const createWord = trigger => trigger === 'threeLetters' ? setWord(choiceRandomWord(threeLetterWords), createRandomPosition()) :
                                trigger === 'fourLetters' ? setWord(choiceRandomWord(fourLetterWords), createRandomPosition()) :
                                trigger === 'sixLetters' ? setWord(choiceRandomWord(sixLetterWords), createRandomPosition()) : 
                                trigger === 'allWordsRus' ? setWord(choiceRandomWordFromAllWords(threeLetterWords, fourLetterWords, sixLetterWords), createRandomPosition()) :
                                trigger === 'threeLettersEng' ? setWord(choiceRandomWord(threeLetterWordsEng), createRandomPosition()) :
                                trigger === 'fourLettersEng' ? setWord(choiceRandomWord(fourLetterWordsEng), createRandomPosition()) :
                                trigger === 'sixLettersEng' ? setWord(choiceRandomWord(sixLetterWordsEng), createRandomPosition()) : 
                                trigger === 'allWordsEng' ?  setWord(choiceRandomWordFromAllWords(threeLetterWordsEng, fourLetterWordsEng, sixLetterWordsEng), createRandomPosition()) : ''
    
    const writeWord = ()=>  buttonTrigger === 'threeLetterWords' ? dispatch(createWord('threeLetters')) :
                            buttonTrigger === 'fourLetterWords' ? dispatch(createWord('fourLetters')) :
                            buttonTrigger === 'sixLetterWords' ? dispatch(createWord('sixLetters')) : 
                            buttonTrigger === 'allWordsRus' ? dispatch(createWord('allWordsRus')) : 
                            buttonTrigger === 'threeLetterWordsEng' ? dispatch(createWord('threeLettersEng')) :
                            buttonTrigger === 'fourLetterWordsEng' ? dispatch(createWord('fourLettersEng')) :
                            buttonTrigger === 'sixLetterWordsEng' ? dispatch(createWord('sixLettersEng')) : 
                            buttonTrigger === 'allWordsEng' ? dispatch(createWord('allWordsEng')) :''
    
    const buttonWordsTrigger = ['threeLetterWords', 'fourLetterWords', 'sixLetterWords', 'threeLetterWordsEng', 
    'fourLetterWordsEng', 'sixLetterWordsEng', 'allWordsRus', 'allWordsEng']
    return (
        <div
            className='activeWordBlock' onClick = {writeWord} 
            style={{display:buttonWordsTrigger.includes(buttonTrigger) ? 'block' : ''}}>
            <Words/>
        </div>
    )
}
const putStateToProps = state => {
    return (
        {
            buttonTrigger: state.activeButton.buttonTrigger,
            arrayWords: state.simpleWords.arrayWords,
        }
    )
}
export default connect(putStateToProps)(ActiveWordsBlock)