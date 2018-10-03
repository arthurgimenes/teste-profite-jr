import React from 'react';

class Foot extends React.Component {
    render() {
        return (
            <div class="row justify-content-md-center">
                <div id="divAdress" class="col-4">
                    <div class="row">
                        <span>Localização</span>
                    </div>
                    <div class="row">
                        <span id="divrectangle"></span>
                    </div>
                    <div id="rowListFoot" class="row">
                        <div class="col-5">
                            <ul>
                                <li>São Paulo</li>
                                <li>Rua do Rócio, 423/1801</li>
                                <li>Vila Olímpia - SP</li>
                                <li>04552-000</li>
                                <li>+55 11 3333 3333</li>
                            </ul>
                        </div>
                        <div class="col-5">
                            <ul>
                                <li>Rio de Janeiro</li>
                                <li>Vol.da Pátria, 301/702</li>
                                <li>Botafogo - RJ</li>
                                <li>22270-000</li>
                                <li>+55 21 3333 3333</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row">
                        <div class="col-6">
                            <button>ENTRE EM CONTATO</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button>FALE COM O NOSSO CONSULTOR ONLINE</button>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <img></img><span>logo profite</span>
                </div>
            </div >
        );
    }
}

export default Foot;
