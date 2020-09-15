$(function() {
    

  "use strict";

  $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: (target.offset().top -70)
              }, 1200, "easeInOutExpo");
              return false;
          }
      }
  });
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
        } else{
            $(".navbar-area").addClass("sticky");
        }
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Countdown
    
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="header-countdown pt-20 d-flex justify-content-center"><div class="single-count-content count-color-1"><span class="count">%D</span><p class="text">Days</p></div><div class="single-count-content count-color-2"><span class="count">%H</span><p class="text">Hours</p></div><div class="single-count-content count-color-3"><span class="count">%M</span><p class="text">Minutes</p></div><div class="single-count-content count-color-4"><span class="count">%S</span><p class="text">Seconds</p></div></div>'));
        });
    });
    
    
    new WOW().init();
    
        
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
     
    
    $('.client-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
        });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200);
            $('.main-container').fadeIn(200);
        } else{
            $('.back-to-top').fadeOut(200);
            $('.main-container').fadeOut(200);
        }
    });
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });  

    //chat bot
    $("#chat-bot .bot-header").on("click",function (e) {
      e.preventDefault();
      var t = $("#chat-bot");
      parseInt(t.css("bottom").substring(0, t.css("bottom").lastIndexOf("px"))) < -100 && ($("#chat-bot").animate({
        bottom: "-5px"
      }), $("#chat-bot .bot-header button").show(), $(this).removeClass("hvr-bob-hover"))
    });
  
    $("#chat-bot .bot-header .btn-min").on("click",function () {
      $("#chat-bot").animate({
        bottom: "-523px"
      }), $("#chat-bot .bot-header button").hide(), $("#chat-bot .bot-header").addClass("hvr-bob-hover")
    });
  
    $("#chat-bot .bot-header .btn-refresh").on("click",function () { });
  
    $(".round, .minimize").on("click",function () {
      $(".chatContainer").toggleClass("chatContainer-rotate")
    });
  
    $(".clear-re").on("click",function () {
      $(".app-container iframe").attr("src", $(".app-container iframe").attr("src"));
    });
  
    $('#botDiv').load(function() {
  
      $("#botDiv").contents().find(".wc-header").hide();
    });
    //chat bot ends
});