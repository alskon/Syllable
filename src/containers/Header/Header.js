import React from 'react'
import './Header.css'
import {Navigation} from '../../components/Navigation/Navigation'

export const Header = ()=> {
    const mainHeader = [...'Simple exercises for children']
    const styleColors = ['DeepPink', 'SpringGreen', 'LightSeaGreen', 'Moccasin', 'Coral', 'DarkSeaGreen', 'SkyBlue', 'Yellow']
    const colorHeader = mainHeader.map((letter, index) => <span key={index} style={{color: styleColors[index%styleColors.length]}}>{letter}</span>)
    return (
        <React.Fragment>
            <h1 className='mainHeader'>{colorHeader}</h1>
            <Navigation/>
        </React.Fragment>
    )
}