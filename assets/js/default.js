$(document).ready(function(){

/*=========================   MENU MOBILE   =========================*/
    $(".openbtn").click(function(){
        $('#mySidenav').css({'display':'block', 'width':'100%'});
    	$(this).hide();
        $(".closebtn").show();
        $("body").css("overflow","hidden");
    });

    $(".closebtn").click(function(){
         $('#mySidenav').hide();
    	$(this).hide();
        $(".openbtn").show();
        $("body").css("overflow","visible");
    });
    

/*=========================   CARROSSEL   =========================*/
        var $banner = $(".banner");
        if( $banner.length ){
            $banner.owlCarousel({
                items           : 1,
                loop            : true,
                singleItem      : true,
                autoPlay        : true,
                stopOnHover     : true,
                navigation      : true,
                autoHeight      : true,
                navigationText  : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            });
        }

        var $prateleira = $(".prateleira");
        if( $prateleira.length ){
            $prateleira.owlCarousel({
                items           : 4,
                itemsMobile     : [479,2],
                loop            : true,
                autoPlay        : true,
                stopOnHover     : true,
                navigation      : true,
                autoHeight      : true,
                navigationText  : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            });
        }


/*=========================   AVALIACAO   =========================*/
        var i;
        for (i = 0; i <  $('.avaliacao').length; i++){
                var produto =  'produto'+[i]+'';
                console.log (produto);
        }
        $('.avaliacao').each(function(produto){
            $(this).html('  <input type="radio" id="'+produto+'-empty" name="fb" value="" checked/>'+
                              '  <label for="'+produto+'_star-1"><i class="fa fa-star"></i></label>'+
                              '  <input type="radio" id="'+produto+'_star-1" name="fb" value="1"/>'+
                              '  <label for="'+produto+'_star-2"><i class="fa fa-star"></i></label>'+
                              '  <input type="radio" id="'+produto+'_star-2" name="fb" value="2"/>'+
                              '  <label for="'+produto+'_star-3"><i class="fa fa-star"></i></label>'+
                              '  <input type="radio" id="'+produto+'_star-3" name="fb" value="3"/>'+
                              '  <label for="'+produto+'_star-4"><i class="fa fa-star"></i></label>'+
                              '  <input type="radio" id="'+produto+'_star-4" name="fb" value="4"/>'+
                              '  <label for="'+produto+'_star-5"><i class="fa fa-star"></i></i></label>'+
                              '  <input type="radio" id="'+produto+'_star-5" name="fb" value="5"/>'
                            );         

          
        });

        
});