$(document).ready(function($) {


    var carousel = $('.carousel-comp').unslider({

        nav: false,
        arrows: {

            prev: '<a class="unslider-arrow prev arrow-left"></a>',
            next: '<a class="unslider-arrow next arrow-right"></a>',

        }
    });



    carousel.on('unslider.change', function(event, index, slide) {


        var navNum = $('.nav-num'),
            index = parseInt(index + 1);

        navNum.text(index + "/12");



    });



    console.log('234');

});