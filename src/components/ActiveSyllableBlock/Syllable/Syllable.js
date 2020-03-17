import React from 'react' 
import './Syllable.css'
import {connect} from 'react-redux'

const Syllable = ({syllableParagraph, styleLocationSyllable})=> {
    return (
        <div className='syllableBlock' style={{width:`${styleLocationSyllable.width}`, 
                                        height:`${styleLocationSyllable.height}`, left:`${styleLocationSyllable.left}`, 
                                        top:`${styleLocationSyllable.top}`}}>
           <p>
                {syllableParagraph}
           </p>
        </div>
    )
}

const putStateToProps = state => {
    return ({
        syllableParagraph: state.syllable.syllableParagraph,
        styleLocationSyllable:state.syllable.style
    })
}

export default connect(putStateToProps)(Syllable)