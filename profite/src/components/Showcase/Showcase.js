import React from 'react'
import Item from './Item/Item'
import './Showcase.scss'

const Showcase = () => {
    
    return (
        <div className="Showcase">
            <h2>Produtos</h2>
            <div className="risco"></div>
            <section>
                <div className="slide">
                    <Item />    
                    <Item />    
                </div>
                <div className="slide">
                    <Item />    
                    <Item />    
                </div>
            </section>
        </div>
    )   
}


export default Showcase