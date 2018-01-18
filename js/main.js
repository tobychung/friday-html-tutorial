$(document).ready(function($) {


//------------ 動態輪播 ------------//
  var carousel = $('.carousel-comp').unslider({

    autoplay:true,
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


//------------ 小網漢堡列 ------------//
  var ww = $(window).width();

  $(document).ready(function() {


      $(".nav li a").each(function() {
          if ($(this).next().length > 0) {
              $(this).addClass("parent");
          };
      })
      
      $(".toggleMenu").click(function(e) {
          e.preventDefault();
          $(this).toggleClass("active");
          $(".nav").toggle();
      });
      adjustMenu();
  })

  $(window).bind('resize orientationchange', function() {
      ww = document.body.clientWidth;
      adjustMenu();
  });
      console.log('YA YA YA');

      var adjustMenu = function() {
      if (ww < 1281) {
          $(".toggleMenu").css("display", "inline-block");
          if (!$(".toggleMenu").hasClass("active")) {
              $(".nav").hide();
          } else {
              $(".nav").show();
          }
          $(".nav li").unbind('mouseenter mouseleave');
          $(".nav li a.parent").unbind('click').bind('click', function(e) {
              // must be attached to anchor element to prevent bubbling
              e.preventDefault();
              $(this).parent("li").toggleClass("hover");
          });
      } 
      else if (ww >= 1280) {
          $(".toggleMenu").css("display", "none");
          $(".nav").show();
          $(".nav li").removeClass("hover");
          $(".nav li a").unbind('click');
          $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
              // must be attached to li so that mouseleave is not triggered when hover over submenu
              $(this).toggleClass('hover');
          });
      }
  }



});


