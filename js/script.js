$(document).ready(function () {
    // Modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })

    // card 1
    $('#img-product1').hover(function() {
        $(this).parents(".card").css("background-color", "#eebb00");
        $(this).attr("src","img/sapatos/calçado1_hover.png");
        }, function() {
        $(this).attr("src","img/sapatos/calçado1.png");
        $(this).parents(".card").css("background-color", "#fff");
    })

    // card 2
    $('#img-product2').hover(function() {
        $(this).parents(".card").css("background-color", "#eebb00");
        $(this).attr("src","img/sapatos/calçado2_hover.png");
        }, function() {
        $(this).attr("src","img/sapatos/calçado2.png");
        $(this).parents(".card").css("background-color", "#fff");
    })

    // card 3
    $('#img-product3').hover(function() {
        $(this).parents(".card").css("background-color", "#eebb00");
        $(this).attr("src","img/sapatos/calçado3_hover.png");
        }, function() {
        $(this).attr("src","img/sapatos/calçado3.png");
        $(this).parents(".card").css("background-color", "#fff");
    })

    // card 4
    $('#img-product4').hover(function() {
        $(this).parents(".card").css("background-color", "#eebb00");
        $(this).attr("src","img/sapatos/calçado4_hover.png");
        }, function() {
        $(this).attr("src","img/sapatos/calçado4.png");
        $(this).parents(".card").css("background-color", "#fff");
    })


});

