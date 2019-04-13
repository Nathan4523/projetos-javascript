  $(document).ready(function () {
            $('.btpopup').hide()

            $('.btpopup').click(function () {
                $('html, body').animate({ scrollTop : 0 }, 'slow');
                return false;
            });

            $(window).scroll(function () {

                if ($(this).scrollTop() > 300) {
                    $('.btpopup').fadeIn();
                }
                else {
                    $('.btpopup').fadeOut();
                }
            });
        });