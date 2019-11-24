import React from 'react'
import Item from './Item/Item'
import './Showcase.scss'
import LineOrange from '../LineOrange/LineOrange'

const Showcase = () => {
    
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
        <div className="Showcase">
            <section>
                <h2>Produtos</h2>
                <LineOrange />
            </section>
            <div className="slide">
              <Item />       
            </div>
            <article>
                <div style={rotate ? {backgroundColor: "#FF9F1C"} : {backgroundColor:"#BDBDBD"}}></div>
                <div style={rotate ? {backgroundColor: "#BDBDBD"} : {backgroundColor:"#FF9F1C"}}></div>
                <div></div>
                <div></div>
            </article>

        </div>
    )   
}


export default Showcase