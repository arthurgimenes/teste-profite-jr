import React from 'react'
import './Header.scss'
import  Logo from '../../img/Logo.png'
import  Buy from '../../img/carrinho.png'
import  Seach from '../../img/lupa.png'
import  Menu from '../../img/menu.svg'


const Header = () => {
    return (
        <div className="Header"> 
        <header>
            <div>
               <img src={Menu} alt="menu"/>
            </div>
            <div>
                <img src={Logo} alt="logo"/>
            </div>
            <div>
                <img src={Buy} alt="Carrinho"/>
                <div className="elipse"></div>
            </div>
        </header>
        <section>
            <input type="seach" placeholder="O que você está procurando?"/><button><img src={Seach} alt="pesquisar"/></button>
        </section>
        </div>
    )
}


export default Header;