import React from 'react'
import './Words.css'
import {connect} from 'react-redux'


const Words = ({wordParagraph, styleLocationWord, dispatch}) => {


    return (
        <div className='wordBlock' style={{width:`${styleLocationWord.width}`, 
                                        height:`${styleLocationWord.height}`, left:`${styleLocationWord.left}`, 
                                        top:`${styleLocationWord.top}`}}>
           <p>
                {wordParagraph}
                
           </p>
        </div>
    )
}

const putStateToProps = state => {
    return (
        {
            wordParagraph: state.simpleWords.wordParagraph,
            styleLocationWord: state.simpleWords.style,
        }
    )
}
export default connect(putStateToProps)(Words)