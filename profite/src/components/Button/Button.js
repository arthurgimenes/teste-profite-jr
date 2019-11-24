import React from 'react'
import './Button.scss'

const Button = ({children, iconBtn}) => {
    return (
        <button className="Button"><img src={iconBtn} alt="icone botao"/> {children}</button>
    )
}


export default Button