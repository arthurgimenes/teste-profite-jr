import React from 'react'
import './Banner.scss'
import backgroundImage from '../../img/background-image.png'


const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}} className="Banner">
            <header>
            <h1>Nossa especialidade: experiência de compra.</h1>
            <div></div>
            <section>
                <article>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            </section>
            </header>
        </div>
    )
}

export default Banner