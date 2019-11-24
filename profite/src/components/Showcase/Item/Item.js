import React from 'react'
import Shoe from '../../../img/tenis.png'
import Add from '../../../img/add-carrinho.png'
import Stars from '../../../img/rating.png'
import './Item.scss'



const products = [
    {   
        Name: "Puma1",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        rating: Stars,
        price: 299.00,
        sale: 399.90,
    },
    {   
        Name: "Puma2",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        rating: Stars,
        sale: 399.90,
    },
    {   
        Name: "Puma3",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        rating: Stars,
        sale: 399.90,
    },
    {   
        Name: "Puma4",
        picture: Shoe,
        description: "TÊNIS COURO PUMA R698 Q4 V2",
        price: 299.00,
        rating: Stars,
        sale: 399.90,
    }

]

const Item = () => {

    const [rotate, setrotate] = React.useState(true)

    React.useEffect(() =>{
        setInterval(() => {
           if( rotate ){
               setrotate(false)
           }
           else{
               setrotate(true)
           }
        }, 3000);
    },[rotate])

 
    
    return (

        <div className="Item">

            {products.map((item) => {
                return <div className="product" style={rotate ? {transform: "translateX(0px)"} : {transform: "translateX(-450px)"}} >
                    <div><p>OFF</p></div>
                    <img src={item.picture} alt="tenis"/>
                    <p>{item.description}</p>
                    <img src={item.rating} alt="avaliação"/>
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