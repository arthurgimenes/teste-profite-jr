import React from 'react'
import "./Adress.scss"


const Adress = ({UF, adress, cep, state, tel}) => {
    return (
        <div className="Adress">
            <h3>{UF}</h3>
            <p>{adress}</p>
            <p>{cep}</p>
            <p>{state}</p>
            <p>{tel}</p>
        </div>
    )    
}


export default Adress