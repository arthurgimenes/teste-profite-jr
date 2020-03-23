<html>
    <head> 
        <?php
            require("../def/head.php");
            //require("../def/function.php");
        ?>
    </head>
    <body>
        <div class="container-fluid no-gutters" style="margin: 35px 0 0 0;">
            <div class="row">
                <i class="fas fa-bars d-sm-none d-block offset-1 mt-4" style="font-size: 20px; cursor: pointer"></i>
                <div id="imglogo" class="col-1 offset-1 col-sm-2 offset-sm-2">
                    <img src="/teste-profite-jr/img/logo.jpg" class="imglogo" style="width: 205px; height: 60px;" alt="logo">
                </div>
                <div class="col-3 d-none d-md-block" >
                    <div class="row">
                        <input type="text" id="teste" class="form-control col border-left-0 border-right-0 border-top-0" placeholder="Oque está procurando?">
                        <button class="btn btn-outline col-2 border-left-0 border-right-0 border-top-0" type="button" id=""><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div class="col-1 offset-1 mt-1 d-none d-md-block">
                    <div class="row">
                        <i class="fas fa-user-circle" style="margin-right: 6px; margin-top: 1px; font-size: 20px;"></i>
                        <a href=""> Minha conta </a>
                    </div>
                </div>
                <div class="offset-6 col-1 offset-sm-0 col-sm-1 row mt-1">
                    <i class="fas fa-shopping-cart" style="font-size: 20px; margin-top: 1px;"></i>
                    <div class="col-4 border-left border-secondary offset-3  d-none d-md-block" style="height: 30px;">
                        <i class="fas fa-globe-americas mt-1" style="color: green; font-size: 20px"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-10 d-block d-md-none offset-1 mb-1" >
            <div class="row">
                <input type="text" id="teste" class="form-control col border-left-0 border-right-0 border-top-0" placeholder="Oque está procurando?">
                <button class="btn btn-outline col-2 border-left-0 border-right-0 border-top-0" type="button" id=""><i class="fas fa-search"></i></button>
            </div>
        </div>
         <!-- Carousel -->
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/teste-profite-jr/img/slide1.jpg" class="d-block w-auto img-fluid">
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style="color:white">Compre de forma fácil pela internet</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/teste-profite-jr/img/slide2.jpg" class="d-block w-auto img-fluid">
                    <div class="carousel-caption d-none d-md-block">
                        <h1 >Ganhe cupons presentes para desconto</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/teste-profite-jr/img/slide3.jpg" class="d-block w-auto img-fluid">
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style="color:white">Melhor conectividade entre plataformas</h1>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
            <!-- Carousel -->
        </div>
        <!-- Container Compras -->
        <div class="container mt-3">
            <h3>Produtos</h3>
            <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color:#FF9F1C; height:2px">
            <div class="row">
                <div class="card col-6 col-md-3" style="width: 18rem;">
                    <img class="card-img-top" src="/teste-profite-jr/img/produto1.jpg" alt="Imagem de capa do card">
                    <div class="card-body" style="text-align: center">
                        <h6 class="card-title">Camiseta Zed League of Legends</h6>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <p style="text-decoration: line-through; font-size: smaller;">de R$ 299,00</p>
                        <p style="font-weight: bold; color:#2EC4B6; font-size: larger;">Por R$ 399,00</p>
                        <p style="font-size: smaller">ou em 3x de R$ 133,00</p>
                        <div class="btn btn-body mt-1"><i class="fas fa-cart-arrow-down mr-1"></i>Comprar</div>
                    </div>
                </div>
                <div class="card col-6 col-md-3" style="width: 18rem;">
                    <img class="card-img-top" src="/teste-profite-jr/img/produto1.jpg" alt="Imagem de capa do card">
                    <div class="card-body" style="text-align: center">
                        <h6 class="card-title">Camiseta Zed League of Legends</h6>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <p style="text-decoration: line-through; font-size: smaller;">de R$ 299,00</p>
                        <p style="font-weight: bold; color:#2EC4B6; font-size: larger;">Por R$ 399,00</p>
                        <p style="font-size: smaller">ou em 3x de R$ 133,00</p>
                         <div class="btn btn-body mt-1 "><i class="fas fa-cart-arrow-down mr-1"></i>Comprar</div>
                    </div>
                </div>
                <div class="card col-3 d-md-block d-none" style="width: 18rem;">
                    <img class="card-img-top" src="/teste-profite-jr/img/produto1.jpg" alt="Imagem de capa do card">
                    <div class="card-body" style="text-align: center">
                        <h6 class="card-title">Camiseta Zed League of Legends</h6>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <p style="text-decoration: line-through; font-size: smaller;">de R$ 299,00</p>
                        <p style="font-weight: bold; color:#2EC4B6; font-size: larger;">Por R$ 399,00</p>
                        <p style="font-size: smaller">ou em 3x de R$ 133,00</p>
                         <div class="btn btn-body mt-1"><i class="fas fa-cart-arrow-down mr-1"></i>Comprar</div>
                    </div>
                </div>
                <div class="card col-3 d-md-block d-none" style="width: 18rem;">
                    <img class="card-img-top" src="/teste-profite-jr/img/produto1.jpg" alt="Imagem de capa do card">
                    <div class="card-body" style="text-align: center">
                        <h6 class="card-title">Camiseta Zed League of Legends</h6>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text fas fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <i class="card-text far fa-star strela" style="color: #FF9F1C"></i>
                        <p style="text-decoration: line-through; font-size: smaller;">de R$ 299,00</p>
                        <p style="font-weight: bold; color:#2EC4B6; font-size: larger;">Por R$ 399,00</p>
                        <p style="font-size: smaller">ou em 3x de R$ 133,00</p>
                         <div class="btn btn-body mt-1"><i class="fas fa-cart-arrow-down mr-1"></i>Comprar</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container Compras -->
    </body>
    <!-- Footer -->
    <footer class="page-footer font-small" style="background: #011627; color: white">
        <div class="container text-left mt-5 mb-4">
            <div class="row mt-3">
                <div class="col-6 col-sm-3 ">
                    <h6 class="text-uppercase font-weight-bold mt-4">Localização</h6>
                    <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color:#FF9F1C">
                    <h6>São Paulo</h6>
                    <p>Rua do Rócio, 423/1801</p>
                    <p>Vila Olímpia - SP </p>
                    <p>04552-000</p>
                    <p>+55 11 3333 3333</p>
                </div>
                <div class="col-6 col-sm-3 mt-auto ">
                    <h6>Rio de Janeiro</h6>
                    <p>Vol. da Pátria, 301/702</p>
                    <p>Botafogo - RJ </p>
                    <p>22270-000</p>
                    <p>+55 21 3333 3333</p>
                </div>
                <div class="row mx-auto" style="margin-top: 7%">
                    <div class="col-7 btn-block btn btn-footer text-uppercase font-weight-bold mb-4" style="color: white; width: 173px; height: 38px; font-size: 12px;" ><i class="fas fa-envelope mr-2" style="font-size: 17px"></i> Entre em contato </div>
                    <div class="col-7 btn-block btn btn-footer text-uppercase font-weight-bold" style="color: white; width: 173px; height: 44px; font-size: 11px;"><i class="fas fa-headset mr-2" style="font-size: 17px"></i> Fale com nosso consultor online  </div>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-4 mb-md-0 row" style="margin: 13% -32% 0 0;">
                    <div class="col-6">
                        <p>Created by</p>
                        <img  src="/teste-profite-jr/img/profite2.png">
                    </div>
                    <div class="col-6">
                        <p>Powered by</p>
                        <img  src="/teste-profite-jr/img/vtex.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright text-center" style="background: #2EC4B6; height: 10px;"> </div>
    </footer>
    <!-- Footer -->
</html>