function identific_nav(){

    var tipo1 = $('.model1');
    var tipo2 = $('.model2');
    var tipo3 = $('.model3');
    var tipo4 = $('.model4');

    var nav = navigator.userAgent.toLowerCase();

    if(nav.indexOf("msie") != -1){

        browser = "msie";

       $(tipo1).ready(function(){
            $('.model1-1').show('slow');
        });

    }

    else if(nav.indexOf("safari") != -1){

        browser = "safari";

         $(tipo3).ready(function(){
            $('.model1-3').show('slow');
        });
        
    }

    else if(nav.indexOf("mozilla") != -1){

        if(nav.indexOf("firefox") != -1){

            browser = "firefox";

        $(tipo4).ready(function(){
            $('.model1-4').show('slow');
        });

        }

    else if(nav.indexOf("firefox") != -1){

        browser = "mozilla";

        $(tipo4).ready(function(){
            $('.model1-4').show('slow');
        });

        }
    else if(nav.indexOf("safari") != -1){

        browser = "safari";

        $(tipo2).ready(function(){
            $('.model1-2').show('slow');
         });
       }
    }
}