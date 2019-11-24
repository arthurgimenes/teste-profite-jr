import React from 'react'
import './Footer.scss'
import Adress from './Adress/Adress'
import Button from '../Button/Button'
import IconMail from '../../img/Iconemail.png'
import IconPhone from '../../img/Iconphone.png'
import Logos from './Logos/Logos'
import Profite from '../../img/logobranco.png'
import Vtex from '../../img/vtex.png'
import LineOrange from '../LineOrange/LineOrange'

const Footer = () => {
    return (
        <div className="Footer">
            <section>
                <h2>Localização</h2>
                <LineOrange />
            </section>
            <main>
                <Adress UF="São Paulo" adress="Rua do Rócio, 423/1801" state="Vila Olímpia - SP" cep="04552-000" tel="+55 11 3333 3333" />
                <Adress  UF="Rio de Janeiro" adress="Vol. Pátria, 301/702" state="Botafogo - RJ" cep="22270-000" tel="+55 21 3333 3333"/>
            </main>
            <article>
                <Button iconBtn={IconMail}>ENTRE EM CONTATO</Button>
                <Button iconBtn={IconPhone}>FALE COM O NOSSO CONSULTOR ONLINE</Button>
            </article>
            <footer>
                <Logos name="Created by" imgLogo={Profite}/>
                <Logos name="Powered by" imgLogo={Vtex}/>
            </footer>
        </div>
    )
}

export default Footer