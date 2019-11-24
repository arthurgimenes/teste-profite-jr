import React from 'react'
import Shoe from '../../../img/tenis.png'
import Add from '../../../img/add-carrinho.png'
import './Item.scss'


const products = [
    {   
        Name: "Puma1",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        sale: 399.90,
    },
    {   
        Name: "Puma2",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        sale: 399.90,
    },
    {   
        Name: "Puma3",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        sale: 399.90,
    },
    {   
        Name: "Puma4",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        sale: 399.90,
    }

]

const Item = () => {

    
    return (

        <div className="Item">

            {products.map((item) => {
                return <div className="product">
                    <img src={item.picture} alt="tenis"/>
                    <p>{item.description}</p>
                    <p>de R${item.price}</p>
                    <p>por R$ {item.sale}</p>
                    <p>ou em 3x de R$ {(item.sale / 3).toFixed(2)}</p>
                    <button><img src={Add} alt="buy"/>COMPRAR</button>
                </div> 
                    
            })}
        </div>
    )
}

export default Item