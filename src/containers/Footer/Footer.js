import React from 'react'
import './Footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    const name = [...'ALSKON']
    const styleName = ['red', 'green', 'blue']
    const coloredName = name.map((letter, index)=><span key={index} style = {{color: styleName[index]}}>{letter}</span>)
    return (
        <footer>
            <a href='mailto:alkonser@gmail.com'>alkonser@gmail.com</a>
            <p>{currentYear}</p>
            <p>Разработано: <span>{coloredName}</span></p>
        </footer>
    )
}