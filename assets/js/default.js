$(document).ready(function(){


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        //document.getElementClassName("page").style.marginLeft = "250px";
    }
                        
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        //document.getElementById("page").style.marginLeft= "0";
    }
                    

    $(".openbtn").click(function(){
    	$(this).hide();
        $(".closebtn").show();
        $("body").css("overflow","hidden");
    });

    $(".closebtn").click(function(){
    	$(this).hide();
        $(".openbtn").show();
        $("body").css("overflow","visible");
    });
    
    $("#myCarousel").carousel({ 
        items           : 2,
                loop            : true,
                singleItem      : true,
                pause: "hover"});
    
});