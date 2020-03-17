import React, {useEffect} from 'react'
import './Timer.css'
import {connect} from 'react-redux'
import {changeSeconds, changeMinutes, changeHours, launchTimer} from '../../store/timer/actions'

const Timer = ({hours, minutes, seconds, trigger, buttonTrigger, dispatch}) => {
    
    const checkTimer = hours => {
        return hours === 5 ? 
        (dispatch(changeHours(0), changeMinutes(0), changeSeconds(0))) : ''
    }
    const changeHour = hours => {
        dispatch(changeHours(hours))
    }
    const changeMinute = minutes => {
        const nextHour = ++hours        
        dispatch (changeMinutes(minutes))
        if (minutes === 0) changeHour(nextHour)
    }
    const changeSecond = () => {
        checkTimer(hours)
        const currentSecond = seconds === 59 ? 0 : ++seconds
        const currentMinute = minutes === 59 ? 0 : ++minutes
        if (currentSecond === 0) changeMinute(currentMinute)
        dispatch(changeSeconds(currentSecond))
    }
    const setPauseTimer = () => dispatch(launchTimer(!trigger))
    useEffect(       
        () => {
            let interval
            if(trigger) {
                interval = setInterval(()=>{
                    changeSecond()
                },1000)
            } else clearInterval(interval)
            return ()=>clearInterval(interval)
        })
    const timeDial = `${'0'+hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`
        return (
        
        <div className='Timer' style={{display:buttonTrigger ? 'block' : ''}} onClick={setPauseTimer}>
            <p>{timeDial}</p>
        </div>
    )
}

const putStateToProps = state => {
    return( {
        hours: state.timerReducer.hours,
        minutes: state.timerReducer.minutes,
        seconds: state.timerReducer.seconds,
        trigger: state.timerReducer.triggerTimer,
        buttonTrigger: state.activeButton.buttonTrigger
        }
    )
}
export default connect(putStateToProps)(Timer)
