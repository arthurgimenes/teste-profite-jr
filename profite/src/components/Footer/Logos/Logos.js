import React from 'react'
import './Logos.scss'

const Logos = ({name, imgLogo}) => {
    return (
        <div className="Logos">
            <p>{name}</p>
            <img src={imgLogo} alt="logo"/>
        </div>
    )
}

export default Logos