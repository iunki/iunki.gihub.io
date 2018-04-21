$(function () {
    $('.js-burger').click(function () {
        if ($(this).hasClass('close')) {

            $('.js-nav').animate({
                    height: '1.5em',
                    opacity: 0
                }, 500, function () {
                    $('.js-nav').hide();
                }
            );
            $(this).removeClass('close')

        } else {
            $('.js-nav').show().animate({
                height: '6em',
                opacity: 1
            }, 500);
            $(this).addClass('close')

        }
    });


})