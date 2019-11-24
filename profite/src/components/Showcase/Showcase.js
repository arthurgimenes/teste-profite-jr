import React from 'react'
import Item from './Item/Item'
import './Showcase.scss'

const Showcase = () => {
    


    return (
        <div className="Showcase">
            <h2>Produtos</h2>
            <div className="risco"></div> 
            <div className="slide">
              <Item />       
            </div>
            <article>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </article>

        </div>
    )   
}


export default Showcase