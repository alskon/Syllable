import React from 'react'
import './Form.css'
import Button from './Button/Button'
import { connect } from 'react-redux'

const Form = ({buttonArrayRus, buttonArrayEng, buttonArrayNumbers, buttonArrayMinMax, buttonArrayWordsRus,buttonArrayWordsEng, btnDisabled})=>{
    const buttons = buttonArrayRus.map(button => <Button disabled={btnDisabled} key={button.id} buttonTrigger={button.trigger} button={button.name}></Button>)
    const buttonsWordsRus = buttonArrayWordsRus.map(button => <Button disabled={btnDisabled} key={button.id} buttonTrigger={button.trigger}button={button.name}></Button>)
    const buttonsEng = buttonArrayEng.map(button => <Button disabled={btnDisabled} key={button.id} buttonTrigger={button.trigger} button={button.name}></Button>)
    const buttonsWordsEng = buttonArrayWordsEng.map(button => <Button btnDisabled={btnDisabled} key={button.id} buttonTrigger={button.trigger} button={button.name}/>)
    const buttonsNumber = buttonArrayNumbers.map(button => <Button disabled={btnDisabled} key={button.id} buttonTrigger={button.trigger} button={button.name}/>)
    const buttonMinMax = buttonArrayMinMax.map(button => <Button disabled={btnDisabled} key={button.id} buttonTrigger={button.trigger} button={button.name}></Button>)
    return (
        <React.Fragment>
            <form style={{display: btnDisabled ? 'none' : ''}}>
                <div className='rusChapter'>
                    <div>{buttons}</div>
                    <div>{buttonsWordsRus}</div>
                </div>
                <div className='engChapter'>
                    <div>{buttonsEng}</div> 
                    <div>{buttonsWordsEng}</div>
                </div>
                <div className='arithmetic'>
                    <div>{buttonsNumber}</div> 
                    <div>{buttonMinMax}</div>  
                </div>
        
            </form>
        </React.Fragment>
    )
}

const putStateToProps = state => { 
    return (
        {
            btnDisabled: state.activeButton.buttonDisabled
        }
        )
}

export default connect (putStateToProps)(Form)